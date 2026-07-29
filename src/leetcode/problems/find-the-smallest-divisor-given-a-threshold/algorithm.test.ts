import { describe, it, expect } from "vitest";
import { divisorSteps } from "./algorithm";
import { CODE } from "./code";

const smallest = (nums: number[], threshold: number) => {
  const steps = divisorSteps(nums, threshold);
  return steps[steps.length - 1].data.answer;
};

describe("divisorSteps", () => {
  it("finds the smallest valid divisor", () => {
    expect(smallest([1, 2, 5, 9], 6)).toBe(5);
    expect(smallest([44, 22, 33, 11, 1], 5)).toBe(44);
    expect(smallest([2, 3, 5, 7, 11], 11)).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of divisorSteps([1, 2, 5, 9], 6)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
