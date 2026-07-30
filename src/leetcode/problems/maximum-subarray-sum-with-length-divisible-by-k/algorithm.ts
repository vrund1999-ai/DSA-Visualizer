import type { Step } from "@/core/types";

export interface MaxSubKData {
  nums: number[];
  k: number;
  /** prefix[i] = sum of first i elements */
  prefix: number[];
  i: number | null;
  r: number | null;
  /** residue -> minimum prefix seen */
  best: [number, number][];
  ans: number;
  answer: number | null;
}

export type MaxSubKStep = Step<MaxSubKData>;

/**
 * A subarray (j, i] has a length divisible by k exactly when i ≡ j (mod k). Its sum is prefix[i] −
 * prefix[j], so for each residue class we keep the smallest prefix seen and subtract it from the current
 * prefix to maximize the sum. `line` indexes CODE.
 */
export function maxSubKSteps(nums: number[], k: number): MaxSubKStep[] {
  const steps: MaxSubKStep[] = [];
  const prefix = [0];
  for (let i = 0; i < nums.length; i++) prefix.push(prefix[i] + nums[i]);
  const best = new Map<number, number>([[0, 0]]);
  let ans = -Infinity;

  const snap = (o: Partial<MaxSubKData>): MaxSubKData => ({ nums, k, prefix, i: null, r: null, best: [...best.entries()], ans, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MaxSubKData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Track the minimum prefix per index residue mod k=${k}.`);

  for (let i = 1; i <= nums.length; i++) {
    const r = i % k;
    if (best.has(r)) {
      const cand = prefix[i] - best.get(r)!;
      ans = Math.max(ans, cand);
      push(7, `i=${i} (residue ${r}): prefix ${prefix[i]} − min ${best.get(r)} = ${cand} (best ${ans}).`, { i, r });
    } else {
      push(6, `i=${i} (residue ${r}): no earlier prefix with this residue yet.`, { i, r });
    }
    best.set(r, Math.min(best.get(r) ?? Infinity, prefix[i]));
  }

  push(11, `Maximum subarray sum with length divisible by ${k}: ${ans}.`, { answer: ans });
  return steps;
}
