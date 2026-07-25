import { describe, it, expect } from "vitest";
import { niceSteps } from "./algorithm";
import { CODE } from "./code";

const nice = (nums: number[], k: number) => {
  const steps = niceSteps(nums, k);
  return steps[steps.length - 1].data.answer;
};

describe("niceSteps", () => {
  it("counts subarrays with exactly k odd numbers", () => {
    expect(nice([1, 1, 2, 1, 1], 3)).toBe(2);
    expect(nice([2, 4, 6], 1)).toBe(0);
    expect(nice([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)).toBe(16);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of niceSteps([1, 1, 2, 1, 1], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
