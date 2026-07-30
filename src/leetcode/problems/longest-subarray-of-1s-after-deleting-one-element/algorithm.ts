import type { Step } from "@/core/types";

export interface LongestOnesData {
  nums: number[];
  left: number;
  right: number | null;
  zeros: number;
  best: number;
  answer: number | null;
}

export type LongestOnesStep = Step<LongestOnesData>;

/**
 * Deleting one element means the answer subarray may contain a single 0 (the deleted cell). A sliding
 * window that holds at most one 0 tracks the longest such run; its length minus the one deleted cell
 * (right − left) is the count of 1s. `line` indexes CODE.
 */
export function longestOnesSteps(nums: number[]): LongestOnesStep[] {
  const steps: LongestOnesStep[] = [];
  let left = 0;
  let zeros = 0;
  let best = 0;

  const snap = (o: Partial<LongestOnesData>): LongestOnesData => ({ nums, left, right: null, zeros, best, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<LongestOnesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Slide a window allowing at most one 0 (the element we delete).");

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++;
    while (zeros > 1) {
      if (nums[left] === 0) zeros--;
      left++;
    }
    best = Math.max(best, right - left);
    push(8, `right=${right}: window [${left},${right}] has ${zeros} zero(s) → ${right - left} ones (best ${best}).`, { right });
  }

  push(10, `Longest subarray of 1s after one deletion: ${best}.`, { answer: best });
  return steps;
}
