import type { Step } from "@/core/types";

export interface PathSum3Data {
  heap: (number | null)[];
  target: number;
  cur: number | null;
  runningSum: number;
  /** prefix-sum -> count, on the current root-to-node path */
  prefix: [number, number][];
  found: number;
  count: number;
  answer: number | null;
}

export type PathSum3Step = Step<PathSum3Data>;

/**
 * A downward path summing to target exists whenever two prefix sums along the current root-to-node path
 * differ by target. Carrying a running prefix count (like the subarray-sum trick) turns each node into
 * an O(1) lookup: how many earlier prefixes equal sum − target. `line` indexes CODE.
 */
export function pathSum3Steps(heap: (number | null)[], target: number): PathSum3Step[] {
  const steps: PathSum3Step[] = [];
  const prefix = new Map<number, number>([[0, 1]]);
  let count = 0;

  const snap = (o: Partial<PathSum3Data>): PathSum3Data => ({ heap, target, cur: null, runningSum: 0, prefix: [...prefix.entries()], found: 0, count, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PathSum3Data> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Count downward paths summing to ${target} using running prefix sums.`);

  function dfs(i: number, sum: number) {
    if (i >= heap.length || heap[i] === null) return;
    sum += heap[i] as number;
    const found = prefix.get(sum - target) || 0;
    count += found;
    push(6, `Node ${heap[i]} (path sum ${sum}): ${found} prefix(es) = ${sum - target} → ${found} new path(s).`, { cur: i, runningSum: sum, found });
    prefix.set(sum, (prefix.get(sum) || 0) + 1);
    dfs(2 * i + 1, sum);
    dfs(2 * i + 2, sum);
    prefix.set(sum, (prefix.get(sum) || 0) - 1);
  }

  dfs(0, 0);
  push(13, `Total paths summing to ${target}: ${count}.`, { answer: count });
  return steps;
}
