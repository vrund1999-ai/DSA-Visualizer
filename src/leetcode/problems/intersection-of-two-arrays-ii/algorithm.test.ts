import { describe, it, expect } from "vitest";
import { intersectSteps } from "./algorithm";
import { CODE } from "./code";

const intersect = (nums1: number[], nums2: number[]) => {
  const steps = intersectSteps(nums1, nums2);
  return steps[steps.length - 1].data.answer!.slice().sort((a, b) => a - b);
};

describe("intersectSteps", () => {
  it("returns the multiset intersection", () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
    expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]);
    expect(intersect([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of intersectSteps([4, 9, 5], [9, 4, 9, 8, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
