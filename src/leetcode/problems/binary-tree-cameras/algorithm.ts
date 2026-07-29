import type { Step } from "@/core/types";

export interface CamerasData {
  heap: (number | null)[];
  /** heap indices holding a camera */
  cameras: number[];
  /** heap indices covered by some camera */
  covered: number[];
  cur: number | null;
  /** state assigned to cur: 0 needs cover, 1 camera, 2 covered */
  state: number | null;
  count: number;
  answer: number | null;
}

export type CamerasStep = Step<CamerasData>;

/**
 * Greedy from the leaves up: a node without a camera among its children stays "uncovered" and forces
 * its parent to hold a camera (covering itself, its children, and its parent). Placing cameras as late
 * as possible — one level above uncovered nodes — minimizes the count. `line` indexes CODE.
 */
export function camerasSteps(heap: (number | null)[]): CamerasStep[] {
  const steps: CamerasStep[] = [];
  const valid = (i: number) => i < heap.length && heap[i] !== null;
  const cameras: number[] = [];
  const covered: number[] = [];
  let count = 0;

  const snap = (o: Partial<CamerasData>): CamerasData => ({ heap, cameras: [...cameras], covered: [...covered], cur: null, state: null, count, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CamerasData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Post-order: place a camera whenever a child would otherwise be uncovered.");

  const dfs = (i: number): number => {
    if (!valid(i)) return 2;
    const l = dfs(2 * i + 1);
    const r = dfs(2 * i + 2);
    let state: number;
    if (l === 0 || r === 0) {
      cameras.push(i);
      count++;
      state = 1;
      push(8, `Node ${heap[i]} has an uncovered child → place a camera (count ${count}).`, { cur: i, state });
    } else if (l === 1 || r === 1) {
      covered.push(i);
      state = 2;
      push(10, `Node ${heap[i]} is covered by a child's camera.`, { cur: i, state });
    } else {
      state = 0;
      push(11, `Node ${heap[i]} needs a camera from its parent.`, { cur: i, state });
    }
    return state;
  };

  if (dfs(0) === 0) {
    cameras.push(0);
    count++;
    push(13, `Root is still uncovered → place a camera there (count ${count}).`, { cur: 0, state: 1 });
  }

  push(14, `Minimum cameras needed: ${count}.`, { answer: count });
  return steps;
}
