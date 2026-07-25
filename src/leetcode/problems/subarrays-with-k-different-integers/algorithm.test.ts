import { describe, it, expect } from "vitest";
import { kDistinctSteps } from "./algorithm";
import { CODE } from "./code";

const count = (nums: number[], k: number) => {
  const steps = kDistinctSteps(nums, k);
  return steps[steps.length - 1].data.answer;
};

describe("kDistinctSteps", () => {
  it("counts subarrays with exactly k distinct integers", () => {
    expect(count([1, 2, 1, 2, 3], 2)).toBe(7);
    expect(count([1, 2, 1, 3, 4], 3)).toBe(3);
    expect(count([1, 1, 1], 1)).toBe(6);
    expect(count([2, 2], 2)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kDistinctSteps([1, 2, 1, 2, 3], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
