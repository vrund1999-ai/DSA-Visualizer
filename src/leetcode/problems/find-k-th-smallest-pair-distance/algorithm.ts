import type { Step } from "@/core/types";

export interface PairDistData {
  nums: number[];
  k: number;
  lo: number;
  hi: number;
  /** candidate distance being tested */
  mid: number | null;
  /** two-pointer window [j, i] during the count */
  window: [number, number] | null;
  count: number | null;
  enough: boolean | null;
  answer: number | null;
}

export type PairDistStep = Step<PairDistData>;

/**
 * The count of pairs with distance ≤ d is monotone in d, so we binary-search the distance. For each
 * candidate a two-pointer sweep counts qualifying pairs in O(n): as the right end advances, the left
 * end catches up until the window fits within d. We keep the smallest d whose count reaches k. `line` indexes CODE.
 */
export function pairDistSteps(input: number[], k: number): PairDistStep[] {
  const steps: PairDistStep[] = [];
  const nums = [...input].sort((a, b) => a - b);
  let lo = 0;
  let hi = nums[nums.length - 1] - nums[0];

  const snap = (o: Partial<PairDistData>): PairDistData => ({ nums, k, lo, hi, mid: null, window: null, count: null, enough: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PairDistData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const countLE = (d: number) => {
    let count = 0;
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
      while (nums[i] - nums[j] > d) j++;
      count += i - j;
    }
    return count;
  };

  push(1, `Sorted: [${nums.join(", ")}]. Binary-search the k-th smallest pair distance.`);

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    const count = countLE(mid);
    const enough = count >= k;
    push(13, `Distance ${mid}: ${count} pair(s) within it ${enough ? "≥" : "<"} k=${k}.`, { mid, count, enough });
    if (enough) {
      hi = mid;
      push(13, `Enough pairs → answer ≤ ${mid}; search lower (hi = ${hi}).`, { mid, count, enough });
    } else {
      lo = mid + 1;
      push(14, `Too few pairs → need larger distance (lo = ${lo}).`, { mid, count, enough });
    }
  }

  push(16, `The ${k}-th smallest pair distance is ${lo}.`, { answer: lo });
  return steps;
}
