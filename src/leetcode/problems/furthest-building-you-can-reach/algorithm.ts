import type { Step } from "@/core/types";

export interface FurthestData {
  heights: number[];
  bricks: number;
  ladders: number;
  /** current building index reached */
  at: number | null;
  /** building indices whose incoming climb currently uses a ladder */
  ladderClimbs: number[];
  /** building indices whose incoming climb was paid with bricks */
  brickClimbs: number[];
  bricksLeft: number;
  answer: number | null;
}

export type FurthestStep = Step<FurthestData>;

/**
 * Ladders should cover the largest climbs, so keep the ladder-assigned climbs in a min-heap of size
 * `ladders`. When a new climb pushes the heap over that size, the smallest climb is demoted to bricks.
 * Running out of bricks marks the furthest reachable building. `line` indexes CODE.
 */
export function furthestSteps(heights: number[], bricks: number, ladders: number): FurthestStep[] {
  const steps: FurthestStep[] = [];
  // min-heap of [climb, buildingIndex]
  const heap: [number, number][] = [];
  const up = (i: number) => {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] <= heap[i][0]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const down = () => {
    let i = 0;
    for (;;) {
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      let s = i;
      if (l < heap.length && heap[l][0] < heap[s][0]) s = l;
      if (r < heap.length && heap[r][0] < heap[s][0]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
  };
  const pop = () => {
    const top = heap[0];
    const last = heap.pop()!;
    if (heap.length) {
      heap[0] = last;
      down();
    }
    return top;
  };

  const brickClimbs: number[] = [];
  let bricksLeft = bricks;

  const snap = (o: Partial<FurthestData>): FurthestData => ({ heights, bricks, ladders, at: null, ladderClimbs: heap.map(([, idx]) => idx), brickClimbs: [...brickClimbs], bricksLeft, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<FurthestData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Reserve ${ladders} ladder(s) for the biggest climbs; pay the rest with ${bricks} bricks.`);

  for (let i = 0; i + 1 < heights.length; i++) {
    const climb = heights[i + 1] - heights[i];
    if (climb <= 0) {
      push(4, `Building ${i + 1}: step down or level — no cost.`, { at: i + 1 });
      continue;
    }
    heap.push([climb, i + 1]);
    up(heap.length - 1);
    if (heap.length > ladders) {
      const [smallest, idx] = pop();
      bricksLeft -= smallest;
      brickClimbs.push(idx);
      push(7, `Climb ${climb} to building ${i + 1}; brick the smallest ladder climb (${smallest}). Bricks left ${bricksLeft}.`, { at: i + 1 });
    } else {
      push(5, `Climb ${climb} to building ${i + 1} uses a ladder.`, { at: i + 1 });
    }
    if (bricksLeft < 0) {
      push(8, `Out of bricks — cannot go beyond building ${i}.`, { at: i, answer: i });
      return steps;
    }
  }

  push(10, `Reached the last building (index ${heights.length - 1}).`, { at: heights.length - 1, answer: heights.length - 1 });
  return steps;
}
