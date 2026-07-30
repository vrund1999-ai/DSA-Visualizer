import type { Step } from "@/core/types";

export interface SplitData {
  nums: number[];
  /** split index i: left part is nums[0..i] */
  scan: number | null;
  leftSum: number;
  rightSum: number | null;
  valid: boolean | null;
  count: number;
  answer: number | null;
}

export type SplitStep = Step<SplitData>;

/**
 * Number of Ways to Split Array: a split at index i is valid when the left prefix sum (nums[0..i]) is at
 * least the right suffix sum. Track a running left sum; the right sum is total − left. `line` indexes CODE.
 */
export function splitSteps(nums: number[]): SplitStep[] {
  const steps: SplitStep[] = [];
  const total = nums.reduce((a, b) => a + b, 0);
  let left = 0;
  let count = 0;

  const snap = (o: Partial<SplitData>): SplitData => ({
    nums,
    scan: null,
    leftSum: left,
    rightSum: null,
    valid: null,
    count,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<SplitData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Total = ${total}. Count splits where the left sum ≥ the right sum.`);

  for (let i = 0; i < nums.length - 1; i++) {
    left += nums[i];
    const right = total - left;
    const valid = left >= right;
    if (valid) count++;
    push(6, `Split after index ${i}: left ${left} ${valid ? "≥" : "<"} right ${right}${valid ? " → valid (count " + count + ")" : ""}.`, {
      scan: i,
      rightSum: right,
      valid,
    });
  }

  push(8, `Valid splits = ${count}.`, { answer: count });
  return steps;
}
