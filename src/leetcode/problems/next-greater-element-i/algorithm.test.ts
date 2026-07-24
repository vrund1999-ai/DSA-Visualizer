import { describe, it, expect } from "vitest";
import { nextGreaterSteps } from "./algorithm";
import { CODE } from "./code";

const nge = (nums1: number[], nums2: number[]) => {
  const steps = nextGreaterSteps({ nums1, nums2 });
  return steps[steps.length - 1].data.result;
};

describe("nextGreaterSteps", () => {
  it("finds the next greater element for each query", () => {
    expect(nge([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1]);
    expect(nge([2, 4], [1, 2, 3, 4])).toEqual([3, -1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of nextGreaterSteps({ nums1: [4, 1, 2], nums2: [1, 3, 4, 2] })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
