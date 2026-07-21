import { describe, it, expect } from "vitest";
import { maxSubArraySteps } from "./algorithm";
import { CODE } from "./code";

const best = (nums: number[]) => {
  const steps = maxSubArraySteps(nums);
  return steps[steps.length - 1].data.best;
};

describe("maxSubArraySteps", () => {
  it("finds the maximum subarray sum", () => {
    expect(best([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(best([1])).toBe(1);
    expect(best([5, 4, -1, 7, 8])).toBe(23);
  });

  it("handles all-negative arrays", () => {
    expect(best([-3, -1, -2])).toBe(-1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxSubArraySteps([-2, 1, -3, 4, -1, 2, 1, -5, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
