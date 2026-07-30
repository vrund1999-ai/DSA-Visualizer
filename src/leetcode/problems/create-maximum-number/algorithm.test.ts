import { describe, it, expect } from "vitest";
import { maxNumberSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums1: number[], nums2: number[], k: number) => {
  const steps = maxNumberSteps(nums1, nums2, k);
  return steps[steps.length - 1].data.answer;
};

describe("maxNumberSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5)).toEqual([9, 8, 6, 5, 3]);
    expect(solve([6, 7], [6, 0, 4], 5)).toEqual([6, 7, 6, 0, 4]);
    expect(solve([3, 9], [8, 9], 3)).toEqual([9, 8, 9]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxNumberSteps([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
