import { describe, it, expect } from "vitest";
import { unsortedSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = unsortedSteps(nums);
  return steps[steps.length - 1].data.answer;
};

// Reference: compare with the sorted array, find the differing span.
function brute(nums: number[]): number {
  const sorted = [...nums].sort((a, b) => a - b);
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < nums.length && nums[lo] === sorted[lo]) lo++;
  while (hi >= 0 && nums[hi] === sorted[hi]) hi--;
  return hi - lo < 0 ? 0 : hi - lo + 1;
}

describe("unsortedSteps", () => {
  it("matches a sort-and-compare reference", () => {
    for (const nums of [[2, 6, 4, 8, 10, 9, 15], [1, 2, 3, 4], [1], [2, 1], [1, 3, 2, 2, 2], [5, 4, 3, 2, 1]]) {
      expect(solve(nums)).toBe(brute(nums));
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of unsortedSteps([2, 6, 4, 8, 10, 9, 15])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
