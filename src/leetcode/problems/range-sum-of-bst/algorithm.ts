import type { Step } from "@/core/types";

export interface RangeSumData {
  heap: (number | null)[];
  low: number;
  high: number;
  /** heap index currently visited */
  active: number | null;
  /** heap indices whose value is inside [low, high] and counted */
  inRange: number[];
  /** heap indices pruned (subtree skipped) */
  pruned: number[];
  sum: number;
  answer: number | null;
}

export type RangeSumStep = Step<RangeSumData>;

/**
 * Range Sum of BST: exploit the BST ordering — if a node is below low, skip its whole left subtree; if above
 * high, skip its right subtree; otherwise add the node and recurse both ways. `line` indexes CODE.
 */
export function rangeSumSteps(heap: (number | null)[], low: number, high: number): RangeSumStep[] {
  const steps: RangeSumStep[] = [];
  const inRange: number[] = [];
  const pruned: number[] = [];
  let sum = 0;
  const present = (i: number) => i < heap.length && heap[i] !== null;

  const snap = (o: Partial<RangeSumData>): RangeSumData => ({
    heap,
    low,
    high,
    active: null,
    inRange: [...inRange],
    pruned: [...pruned],
    sum,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<RangeSumData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(0, `Sum node values in [${low}, ${high}], pruning subtrees the BST order rules out.`);

  const dfs = (i: number): number => {
    if (!present(i)) return 0;
    const v = heap[i] as number;
    if (v < low) {
      pruned.push(2 * i + 1);
      push(3, `${v} < ${low}: skip left subtree, go right.`, { active: i });
      return dfs(2 * i + 2);
    }
    if (v > high) {
      pruned.push(2 * i + 2);
      push(5, `${v} > ${high}: skip right subtree, go left.`, { active: i });
      return dfs(2 * i + 1);
    }
    inRange.push(i);
    sum += v;
    push(6, `${v} is in range → add (sum ${sum}), recurse both sides.`, { active: i });
    return v + dfs(2 * i + 1) + dfs(2 * i + 2);
  };

  const total = dfs(0);
  push(6, `Range sum = ${total}.`, { answer: total });
  return steps;
}
