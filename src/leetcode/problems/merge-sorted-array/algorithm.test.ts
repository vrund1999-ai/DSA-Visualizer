import { describe, it, expect } from "vitest";
import { mergeSortedSteps } from "./algorithm";
import { CODE } from "./code";

const merge = (nums1: number[], m: number, nums2: number[], n: number) => {
  const steps = mergeSortedSteps({ nums1, m, nums2, n });
  return steps[steps.length - 1].data.nums1;
};

describe("mergeSortedSteps", () => {
  it("merges nums2 into nums1 in sorted order", () => {
    expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it("handles empty nums2 and empty nums1", () => {
    expect(merge([1], 1, [], 0)).toEqual([1]);
    expect(merge([0], 0, [1], 1)).toEqual([1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of mergeSortedSteps({ nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
