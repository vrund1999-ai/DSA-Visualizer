import { describe, it, expect } from "vitest";
import { maxProductSteps } from "./algorithm";
import { CODE } from "./code";

const maxProduct = (nums: number[]) => {
  const steps = maxProductSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("maxProductSteps", () => {
  it("finds the maximum product of three", () => {
    expect(maxProduct([1, 2, 3])).toBe(6);
    expect(maxProduct([1, 2, 3, 4])).toBe(24);
    expect(maxProduct([-4, -3, 1, 2, 5])).toBe(60);
    expect(maxProduct([-1, -2, -3])).toBe(-6);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxProductSteps([-4, -3, 1, 2, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
