import { describe, it, expect } from "vitest";
import { maxSumSteps } from "./algorithm";
import { CODE } from "./code";

const maxSum = (nums: number[]) => {
  const steps = maxSumSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("maxSumSteps", () => {
  it("finds the max sum over equal-digit-sum pairs", () => {
    expect(maxSum([18, 43, 36, 13, 7])).toBe(54);
    expect(maxSum([10, 12, 19, 14])).toBe(-1);
    expect(maxSum([51, 71, 17, 42])).toBe(93);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxSumSteps([18, 43, 36, 13, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
