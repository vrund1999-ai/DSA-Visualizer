import type { Step } from "@/core/types";

export interface ZeroArrayData {
  nums: number[];
  queries: number[][];
  lo: number;
  hi: number;
  mid: number | null;
  /** available decrement at each index for the tested k */
  avail: number[];
  feasible: boolean | null;
  answer: number | null;
}

export type ZeroArrayStep = Step<ZeroArrayData>;

/**
 * Zero Array Transformation II: each query [l, r, v] can subtract up to v from every element in [l, r]. The
 * fewest queries needed is monotonic, so binary-search k; a difference array sums the maximum decrement
 * available at each index and checks it covers nums. `line` indexes CODE.
 */
export function zeroArraySteps(nums: number[], queries: number[][]): ZeroArrayStep[] {
  const steps: ZeroArrayStep[] = [];
  const n = nums.length;

  const availFor = (k: number): number[] => {
    const diff = new Array(n + 1).fill(0);
    for (let i = 0; i < k; i++) {
      const [l, r, v] = queries[i];
      diff[l] += v;
      diff[r + 1] -= v;
    }
    const avail: number[] = [];
    let a = 0;
    for (let i = 0; i < n; i++) {
      a += diff[i];
      avail.push(a);
    }
    return avail;
  };
  const feasible = (k: number) => availFor(k).every((a, i) => a >= nums[i]);

  let lo = 0;
  let hi = queries.length;

  const snap = (o: Partial<ZeroArrayData>): ZeroArrayData => ({
    nums,
    queries,
    lo,
    hi,
    mid: null,
    avail: [],
    feasible: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<ZeroArrayData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(15, `Binary-search the fewest queries whose total decrement covers nums.`);

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    const avail = availFor(mid);
    const ok = feasible(mid);
    if (ok) hi = mid;
    else lo = mid + 1;
    push(18, `k = ${mid}: ${ok ? "covers nums → shrink hi" : "insufficient → raise lo"}.`, { mid, avail, feasible: ok });
  }

  const answer = feasible(lo) ? lo : -1;
  push(20, answer === -1 ? `Even all queries can't zero the array → -1.` : `Minimum queries = ${lo}.`, { avail: availFor(lo), answer });
  return steps;
}
