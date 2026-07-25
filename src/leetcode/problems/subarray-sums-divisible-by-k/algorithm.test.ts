import { describe, it, expect } from "vitest";
import { divByKSteps } from "./algorithm";
import { CODE } from "./code";

const count = (nums: number[], k: number) => {
  const steps = divByKSteps(nums, k);
  return steps[steps.length - 1].data.answer;
};

describe("divByKSteps", () => {
  it("counts subarrays divisible by k", () => {
    expect(count([4, 5, 0, -2, -3, 1], 5)).toBe(7);
    expect(count([5], 9)).toBe(0);
    expect(count([2, -2, 2, -4], 6)).toBe(2);
    expect(count([0, 0, 0], 1)).toBe(6);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of divByKSteps([4, 5, 0, -2, -3, 1], 5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
