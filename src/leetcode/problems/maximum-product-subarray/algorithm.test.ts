import { describe, it, expect } from "vitest";
import { maxProductSteps } from "./algorithm";
import { CODE } from "./code";

const best = (nums: number[]) => {
  const steps = maxProductSteps(nums);
  return steps[steps.length - 1].data.best;
};

describe("maxProductSteps", () => {
  it("finds the maximum product subarray", () => {
    expect(best([2, 3, -2, 4])).toBe(6);
    expect(best([-2, 0, -1])).toBe(0);
    expect(best([2, 3, -2, 4, -1])).toBe(48);
  });

  it("handles all-negative and single values", () => {
    expect(best([-2])).toBe(-2);
    expect(best([-2, -3, -4])).toBe(12);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxProductSteps([2, 3, -2, 4, -1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
