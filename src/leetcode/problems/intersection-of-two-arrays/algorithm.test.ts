import { describe, it, expect } from "vitest";
import { intersectionSteps } from "./algorithm";
import { CODE } from "./code";

const inter = (nums1: number[], nums2: number[]) => {
  const steps = intersectionSteps({ nums1, nums2 });
  return steps[steps.length - 1].data.result.sort((a, b) => a - b);
};

describe("intersectionSteps", () => {
  it("returns unique shared values", () => {
    expect(inter([1, 2, 2, 1], [2, 2])).toEqual([2]);
    expect(inter([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]);
  });

  it("returns empty when there's no overlap", () => {
    expect(inter([1, 2], [3, 4])).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of intersectionSteps({ nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4] })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
