import type { Step } from "@/core/types";

export interface ErasureData {
  nums: number[];
  left: number;
  right: number | null;
  sum: number;
  best: number;
  answer: number | null;
}

export type ErasureStep = Step<ErasureData>;

/**
 * The best "erasure" is the maximum-sum subarray of all-distinct elements. A sliding window keeps its
 * elements unique — whenever the incoming value already appears, the left edge advances (subtracting as it
 * goes) until the duplicate is removed. The running sum's maximum is the answer. `line` indexes CODE.
 */
export function erasureSteps(nums: number[]): ErasureStep[] {
  const steps: ErasureStep[] = [];
  const seen = new Set<number>();
  let left = 0;
  let sum = 0;
  let best = 0;

  const snap = (o: Partial<ErasureData>): ErasureData => ({ nums, left, right: null, sum, best, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ErasureData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Slide a window of distinct values; track the maximum running sum.");

  for (let right = 0; right < nums.length; right++) {
    while (seen.has(nums[right])) {
      seen.delete(nums[left]);
      sum -= nums[left];
      left++;
    }
    seen.add(nums[right]);
    sum += nums[right];
    best = Math.max(best, sum);
    push(10, `right=${right}: window [${left},${right}] sum ${sum} (best ${best}).`, { right });
  }

  push(12, `Maximum unique-subarray sum: ${best}.`, { answer: best });
  return steps;
}
