import type { Step } from "@/core/types";

export interface ZeroArrayData {
  nums: number[];
  queries: number[][];
  diff: number[];
  /** prefix-sum capacity per index (computed lazily) */
  capacity: number[];
  /** query index being applied */
  qi: number | null;
  /** index being checked */
  i: number | null;
  answer: boolean | null;
}

export type ZeroArrayStep = Step<ZeroArrayData>;

/**
 * Each query grants one optional decrement to every index in its range, so the total decrements available
 * at index i is how many query ranges cover it — a range-update best tracked with a difference array.
 * The array can reach all zeros iff every nums[i] fits within that coverage. `line` indexes CODE.
 */
export function zeroArraySteps(nums: number[], queries: number[][]): ZeroArrayStep[] {
  const steps: ZeroArrayStep[] = [];
  const n = nums.length;
  const diff = new Array(n + 1).fill(0);
  const capacity = new Array(n).fill(0);

  const snap = (o: Partial<ZeroArrayData>): ZeroArrayData => ({ nums, queries, diff: [...diff], capacity: [...capacity], qi: null, i: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ZeroArrayData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Mark each query's range in a difference array (one available decrement per covered index).");

  for (let q = 0; q < queries.length; q++) {
    const [l, r] = queries[q];
    diff[l]++;
    diff[r + 1]--;
    push(5, `Query [${l}, ${r}]: diff[${l}]++ and diff[${r + 1}]--.`, { qi: q });
  }

  let cap = 0;
  for (let i = 0; i < n; i++) {
    cap += diff[i];
    capacity[i] = cap;
    if (nums[i] > cap) {
      push(10, `Index ${i}: need ${nums[i]} but only ${cap} decrement(s) available → cannot zero out.`, { i, answer: false });
      return steps;
    }
    push(9, `Index ${i}: ${nums[i]} ≤ capacity ${cap} — ok.`, { i });
  }

  push(12, "Every value fits its available decrements → array can become all zeros.", { answer: true });
  return steps;
}
