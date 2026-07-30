import type { Step } from "@/core/types";

export interface ContinuousData {
  nums: number[];
  left: number;
  right: number | null;
  curMax: number | null;
  curMin: number | null;
  total: number;
  answer: number | null;
}

export type ContinuousStep = Step<ContinuousData>;

/**
 * A subarray is "continuous" when its max minus min is at most 2. Two monotonic deques expose the window
 * max and min in O(1); whenever their gap exceeds 2 the left edge advances. Every valid window ending at
 * right contributes right−left+1 subarrays. `line` indexes CODE.
 */
export function continuousSteps(nums: number[]): ContinuousStep[] {
  const steps: ContinuousStep[] = [];
  const maxDq: number[] = [];
  const minDq: number[] = [];
  let left = 0;
  let total = 0;

  const snap = (o: Partial<ContinuousData>): ContinuousData => ({ nums, left, right: null, curMax: null, curMin: null, total, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ContinuousData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Slide a window; two deques track its max and min, shrinking when max − min > 2.");

  for (let right = 0; right < nums.length; right++) {
    while (maxDq.length && nums[maxDq[maxDq.length - 1]] < nums[right]) maxDq.pop();
    while (minDq.length && nums[minDq[minDq.length - 1]] > nums[right]) minDq.pop();
    maxDq.push(right);
    minDq.push(right);
    while (nums[maxDq[0]] - nums[minDq[0]] > 2) {
      left++;
      if (maxDq[0] < left) maxDq.shift();
      if (minDq[0] < left) minDq.shift();
    }
    total += right - left + 1;
    push(12, `right=${right}: window [${left},${right}] max ${nums[maxDq[0]]}, min ${nums[minDq[0]]} → +${right - left + 1} (total ${total}).`, { right, curMax: nums[maxDq[0]], curMin: nums[minDq[0]] });
  }

  push(14, `Total continuous subarrays: ${total}.`, { answer: total });
  return steps;
}
