import type { Step } from "@/core/types";

export interface ZigzagLevelData {
  heap: (number | null)[];
  current: number | null;
  visited: number[];
  levels: number[][];
  ltr: boolean;
}

export type ZigzagLevelStep = Step<ZigzagLevelData>;

const val = (heap: (number | null)[], i: number) => (i < heap.length ? heap[i] : null);

/**
 * Level-order BFS, but alternate the direction each level: even levels read left
 * to right, odd levels right to left (achieved by prepending). `line` indexes
 * CODE.
 */
export function zigzagLevelSteps(heap: (number | null)[]): ZigzagLevelStep[] {
  const steps: ZigzagLevelStep[] = [];
  const levels: number[][] = [];
  const visited: number[] = [];
  const queue: number[] = heap.length && heap[0] !== null ? [0] : [];
  let ltr = true;

  const snap = (o: Partial<ZigzagLevelData>): ZigzagLevelData => ({ heap: [...heap], current: null, visited: [...visited], levels: levels.map((l) => [...l]), ltr, ...o });
  const push = (line: number, explanation: string, data: ZigzagLevelData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "BFS level by level, flipping direction each level.", snap({}));

  while (queue.length) {
    const size = queue.length;
    const level: number[] = [];
    for (let k = 0; k < size; k++) {
      const i = queue.shift()!;
      visited.push(i);
      if (ltr) level.push(heap[i] as number);
      else level.unshift(heap[i] as number);
      push(ltr ? 7 : 8, `Dequeue ${heap[i]} — ${ltr ? "append" : "prepend"} to this level.`, snap({ current: i }));
      if (val(heap, 2 * i + 1) !== null) queue.push(2 * i + 1);
      if (val(heap, 2 * i + 2) !== null) queue.push(2 * i + 2);
    }
    levels.push(level);
    ltr = !ltr;
    push(12, `Level complete: [${level.join(", ")}]. Flip direction.`, snap({}));
  }

  push(14, `Zigzag traversal done — ${levels.length} level(s).`, snap({}));
  return steps;
}
