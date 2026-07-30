import type { Step } from "@/core/types";

export interface AbsSumData {
  nums: number[];
  i: number | null;
  curMax: number;
  maxSum: number;
  curMin: number;
  minSum: number;
  answer: number | null;
}

export type AbsSumStep = Step<AbsSumData>;

/**
 * The largest absolute subarray sum is either the most positive subarray or the negation of the most
 * negative one. Two simultaneous Kadane passes track the maximum and minimum subarray sums; the answer is
 * max(maxSum, −minSum). `line` indexes CODE.
 */
export function absSumSteps(nums: number[]): AbsSumStep[] {
  const steps: AbsSumStep[] = [];
  let curMax = 0;
  let maxSum = 0;
  let curMin = 0;
  let minSum = 0;

  const snap = (o: Partial<AbsSumData>): AbsSumData => ({ nums, i: null, curMax, maxSum, curMin, minSum, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<AbsSumData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Run Kadane for the maximum and minimum subarray sums together.");

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    curMax = Math.max(curMax + x, x);
    maxSum = Math.max(maxSum, curMax);
    curMin = Math.min(curMin + x, x);
    minSum = Math.min(minSum, curMin);
    push(7, `x=${x}: maxSum ${maxSum}, minSum ${minSum}.`, { i });
  }

  const answer = Math.max(maxSum, -minSum);
  push(9, `max(maxSum ${maxSum}, −minSum ${-minSum}) = ${answer}.`, { answer });
  return steps;
}
