import type { Step } from "@/core/types";

export interface CircularData {
  nums: number[];
  i: number | null;
  curMax: number;
  maxSum: number;
  curMin: number;
  minSum: number;
  total: number;
  answer: number | null;
}

export type CircularStep = Step<CircularData>;

/**
 * The best circular subarray is either an ordinary (non-wrapping) maximum subarray, or a wrapping one
 * whose complement is the minimum subarray — so total − minSubarray. Two simultaneous Kadane passes
 * track both; the all-negative case falls back to the plain maximum. `line` indexes CODE.
 */
export function circularSteps(nums: number[]): CircularStep[] {
  const steps: CircularStep[] = [];
  let total = 0;
  let curMax = 0;
  let maxSum = -Infinity;
  let curMin = 0;
  let minSum = Infinity;

  const snap = (o: Partial<CircularData>): CircularData => ({ nums, i: null, curMax, maxSum, curMin, minSum, total, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CircularData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, "Run Kadane for both the maximum and minimum subarray simultaneously.");

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    curMax = Math.max(curMax + x, x);
    maxSum = Math.max(maxSum, curMax);
    curMin = Math.min(curMin + x, x);
    minSum = Math.min(minSum, curMin);
    total += x;
    push(8, `x=${x}: curMax=${curMax} (best ${maxSum}), curMin=${curMin} (best ${minSum}).`, { i });
  }

  const answer = maxSum < 0 ? maxSum : Math.max(maxSum, total - minSum);
  push(
    maxSum < 0 ? 12 : 13,
    maxSum < 0 ? `All negative — answer is the plain max ${maxSum}.` : `max(non-wrap ${maxSum}, wrap ${total} − ${minSum} = ${total - minSum}) = ${answer}.`,
    { answer },
  );
  return steps;
}
