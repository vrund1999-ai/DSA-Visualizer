import { describe, it, expect } from "vitest";
import { repeatedSubSteps } from "./algorithm";
import { CODE } from "./code";

const maxLen = (nums1: number[], nums2: number[]) => {
  const steps = repeatedSubSteps(nums1, nums2);
  return steps[steps.length - 1].data.answer;
};

describe("repeatedSubSteps", () => {
  it("finds the longest common subarray", () => {
    expect(maxLen([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])).toBe(3);
    expect(maxLen([0, 0, 0, 0, 0], [0, 0, 0, 0, 0])).toBe(5);
    expect(maxLen([1, 2, 3], [4, 5, 6])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of repeatedSubSteps([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
