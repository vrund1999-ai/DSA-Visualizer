import type { Step } from "@/core/types";

export interface TripletData {
  nums: number[];
  k: number | null;
  maxI: number;
  maxDiff: number;
  ans: number;
  answer: number | null;
}

export type TripletStep = Step<TripletData>;

/**
 * Treat each element as the k (rightmost) factor. The best (nums[i] − nums[j]) available before k is a
 * running maximum, itself built from the best nums[i] seen so far. One left-to-right pass keeps all three
 * maxima, so every ordered triplet is considered in O(n). `line` indexes CODE.
 */
export function tripletSteps(nums: number[]): TripletStep[] {
  const steps: TripletStep[] = [];
  let ans = 0;
  let maxI = 0;
  let maxDiff = 0;

  const snap = (o: Partial<TripletData>): TripletData => ({ nums, k: null, maxI, maxDiff, ans, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<TripletData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, "Scan left to right; each element is a candidate k = last factor.");

  for (let k = 0; k < nums.length; k++) {
    const num = nums[k];
    ans = Math.max(ans, maxDiff * num);
    maxDiff = Math.max(maxDiff, maxI - num);
    maxI = Math.max(maxI, num);
    push(7, `k=${k} (${num}): best (i−j)diff ${maxDiff} × ${num}; ans ${ans}, maxI ${maxI}.`, { k });
  }

  push(9, `Maximum ordered-triplet value: ${ans}.`, { answer: ans });
  return steps;
}
