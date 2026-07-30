import { describe, it, expect } from "vitest";
import { commonSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums1: number[], nums2: number[]) => {
  const steps = commonSteps(nums1, nums2);
  return steps[steps.length - 1].data.answer;
};

describe("commonSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6])).toEqual([3, 4]);
    expect(solve([3, 4, 2, 3], [1, 5])).toEqual([0, 0]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of commonSteps([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
