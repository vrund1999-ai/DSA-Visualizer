import { describe, it, expect } from "vitest";
import { diffSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums1: number[], nums2: number[]) => {
  const steps = diffSteps(nums1, nums2);
  const last = steps[steps.length - 1].data;
  return [last.only1.sort((a, b) => a - b), last.only2.sort((a, b) => a - b)];
};

describe("diffSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([1, 2, 3], [2, 4, 6])).toEqual([[1, 3], [4, 6]]);
    expect(solve([1, 2, 3, 3], [1, 1, 2, 2])).toEqual([[3], []]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of diffSteps([1, 2, 3], [2, 4, 6])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
