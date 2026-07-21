import { describe, it, expect } from "vitest";
import { findMinSteps } from "./algorithm";
import { CODE } from "./code";

const findMin = (nums: number[]) => {
  const steps = findMinSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("findMinSteps", () => {
  it("finds the minimum in a rotated array", () => {
    expect(findMin([3, 4, 5, 1, 2])).toBe(1);
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
    expect(findMin([11, 13, 15, 17])).toBe(11);
    expect(findMin([2, 1])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of findMinSteps([4, 5, 6, 7, 0, 1, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
