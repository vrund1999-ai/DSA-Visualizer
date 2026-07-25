import type { Step } from "@/core/types";

export interface MaxDistinctData {
  nums: number[];
  k: number;
  lo: number;
  hi: number;
  sum: number;
  distinct: number;
  best: number;
  /** window is full size k and all distinct */
  valid: boolean;
  isBest: boolean;
  answer: number | null;
}

export type MaxDistinctStep = Step<MaxDistinctData>;

/**
 * Slide a window of exactly k elements, tracking its sum and the count of distinct
 * values. Whenever the window is full and every value is distinct, its sum is a
 * candidate for the maximum. `line` indexes CODE.
 */
export function maxDistinctSteps(nums: number[], k: number): MaxDistinctStep[] {
  const steps: MaxDistinctStep[] = [];
  const seen = new Map<number, number>();
  let sum = 0;
  let best = 0;

  const snap = (hi: number, o: Partial<MaxDistinctData>): MaxDistinctData => {
    const lo = Math.max(0, hi - k + 1);
    return { nums: [...nums], k, lo, hi, sum, distinct: seen.size, best, valid: false, isBest: false, answer: null, ...o };
  };
  const push = (line: number, hi: number, explanation: string, o: Partial<MaxDistinctData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(hi, o), highlights: [] });
  };

  push(2, -1, `Sliding window of size ${k}; maximize the sum when all values are distinct.`);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    seen.set(nums[i], (seen.get(nums[i]) ?? 0) + 1);
    if (i >= k) {
      sum -= nums[i - k];
      const c = seen.get(nums[i - k])! - 1;
      if (c === 0) seen.delete(nums[i - k]);
      else seen.set(nums[i - k], c);
    }
    if (i >= k - 1) {
      const valid = seen.size === k;
      const isBest = valid && sum > best;
      if (isBest) best = sum;
      push(11, i, `Window sum ${sum}, ${seen.size}/${k} distinct${valid ? (isBest ? ` — new best ${best}` : " — valid") : " — has duplicates"}.`, { valid, isBest });
    } else {
      push(5, i, `Filling window (index ${i}).`);
    }
  }

  push(13, -1, `Best distinct-window sum: ${best}.`, { answer: best });
  return steps;
}
