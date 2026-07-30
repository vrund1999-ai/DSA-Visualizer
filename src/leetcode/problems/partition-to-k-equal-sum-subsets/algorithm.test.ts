import { describe, it, expect } from "vitest";
import { kSubsetSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[], k: number) => {
  const steps = kSubsetSteps(nums, k);
  return steps[steps.length - 1].data.answer;
};

describe("kSubsetSteps", () => {
  it("decides k-equal-sum partitioning", () => {
    expect(solve([4, 3, 2, 3, 5, 2, 1], 4)).toBe(true);
    expect(solve([1, 2, 3, 4], 3)).toBe(false);
    expect(solve([2, 2, 2, 2, 3, 4, 5], 4)).toBe(false);
    expect(solve([1, 1, 1, 1], 2)).toBe(true);
    expect(solve([1], 1)).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kSubsetSteps([4, 3, 2, 3, 5, 2, 1], 4)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
