import { describe, it, expect } from "vitest";
import { splitArraySteps } from "./algorithm";
import { CODE } from "./code";

const split = (nums: number[], k: number) => {
  const steps = splitArraySteps(nums, k);
  return steps[steps.length - 1].data.answer;
};

describe("splitArraySteps", () => {
  it("minimizes the largest subarray sum", () => {
    expect(split([7, 2, 5, 10, 8], 2)).toBe(18);
    expect(split([1, 2, 3, 4, 5], 2)).toBe(9);
    expect(split([1, 4, 4], 3)).toBe(4);
    expect(split([10], 1)).toBe(10);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of splitArraySteps([7, 2, 5, 10, 8], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
