import { describe, it, expect } from "vitest";
import { contSubSteps } from "./algorithm";
import { CODE } from "./code";

const check = (nums: number[], k: number) => {
  const steps = contSubSteps(nums, k);
  return steps[steps.length - 1].data.answer;
};

describe("contSubSteps", () => {
  it("detects divisible subarrays of length >= 2", () => {
    expect(check([23, 2, 4, 6, 7], 6)).toBe(true);
    expect(check([23, 2, 6, 4, 7], 6)).toBe(true);
    expect(check([23, 2, 6, 4, 7], 13)).toBe(false);
    expect(check([1, 0], 2)).toBe(false);
    expect(check([0, 0], 1)).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of contSubSteps([23, 2, 4, 6, 7], 6)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
