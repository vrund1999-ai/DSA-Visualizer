import { describe, it, expect } from "vitest";
import { subarraySumSteps } from "./algorithm";
import { CODE } from "./code";

const count = (nums: number[], k: number) => {
  const steps = subarraySumSteps(nums, k);
  return steps[steps.length - 1].data.count;
};

describe("subarraySumSteps", () => {
  it("counts subarrays summing to k", () => {
    expect(count([1, 1, 1], 2)).toBe(2);
    expect(count([1, 2, 3], 3)).toBe(2);
    expect(count([1, 2, 1, 2, 1], 3)).toBe(4);
  });

  it("handles negative numbers and zero targets", () => {
    expect(count([-1, -1, 1], 0)).toBe(1);
    expect(count([1, -1, 0], 0)).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of subarraySumSteps([1, 2, 1, 2, 1], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
