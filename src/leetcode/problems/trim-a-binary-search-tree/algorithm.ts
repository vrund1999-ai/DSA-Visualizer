import type { Step } from "@/core/types";

export interface TrimBSTData {
  heap: (number | null)[];
  low: number;
  high: number;
  current: number | null;
  kept: number[];
  removed: number[];
  done: boolean;
}

export type TrimBSTStep = Step<TrimBSTData>;

/**
 * BST trim: at each node, if its value is below `low` the whole left subtree is out of
 * range (recurse right); if above `high` the right subtree is out (recurse left);
 * otherwise keep the node and trim both children. `line` indexes CODE.
 */
export function trimBSTSteps(heap: (number | null)[], low: number, high: number): TrimBSTStep[] {
  const steps: TrimBSTStep[] = [];
  const kept: number[] = [];
  const removed: number[] = [];

  const snap = (o: Partial<TrimBSTData>): TrimBSTData => ({ heap: [...heap], low, high, current: null, kept: [...kept], removed: [...removed], done: false, ...o });
  const push = (line: number, explanation: string, data: TrimBSTData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  const markSubtreeRemoved = (i: number) => {
    if (i >= heap.length || heap[i] === null) return;
    removed.push(i);
    markSubtreeRemoved(2 * i + 1);
    markSubtreeRemoved(2 * i + 2);
  };

  push(0, `Trim the BST to the range [${low}, ${high}].`, snap({}));

  const trim = (i: number) => {
    if (i >= heap.length || heap[i] === null) return;
    const val = heap[i] as number;
    if (val < low) {
      removed.push(i);
      markSubtreeRemoved(2 * i + 1); // entire left subtree is below low too
      push(3, `${val} < ${low} — drop it and its left subtree; recurse right.`, snap({ current: i }));
      trim(2 * i + 2);
    } else if (val > high) {
      removed.push(i);
      markSubtreeRemoved(2 * i + 2);
      push(5, `${val} > ${high} — drop it and its right subtree; recurse left.`, snap({ current: i }));
      trim(2 * i + 1);
    } else {
      kept.push(i);
      push(8, `${val} is in range — keep and trim both children.`, snap({ current: i }));
      trim(2 * i + 1);
      trim(2 * i + 2);
    }
  };
  trim(0);

  push(8, `Kept ${kept.length} node(s): [${kept.map((i) => heap[i]).sort((a, b) => (a as number) - (b as number)).join(", ")}].`, snap({ done: true }));
  return steps;
}
