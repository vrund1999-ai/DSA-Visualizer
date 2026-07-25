import { describe, it, expect } from "vitest";
import { maxDistinctSteps } from "./algorithm";
import { CODE } from "./code";

const maxSum = (nums: number[], k: number) => {
  const steps = maxDistinctSteps(nums, k);
  return steps[steps.length - 1].data.answer;
};

describe("maxDistinctSteps", () => {
  it("maximizes the sum of a distinct-valued window", () => {
    expect(maxSum([1, 5, 4, 2, 9, 9, 9], 3)).toBe(15);
    expect(maxSum([4, 4, 4], 3)).toBe(0);
    expect(maxSum([1, 2, 3, 4, 5], 2)).toBe(9);
    expect(maxSum([9, 9, 9, 1, 2, 3], 3)).toBe(12);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxDistinctSteps([1, 5, 4, 2, 9, 9, 9], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
