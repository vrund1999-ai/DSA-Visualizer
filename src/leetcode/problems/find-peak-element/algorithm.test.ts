import { describe, it, expect } from "vitest";
import { peakSteps } from "./algorithm";
import { CODE } from "./code";

const peak = (nums: number[]) => {
  const steps = peakSteps(nums);
  return steps[steps.length - 1].data.peak;
};

const isPeak = (nums: number[], i: number) =>
  (i === 0 || nums[i] > nums[i - 1]) && (i === nums.length - 1 || nums[i] > nums[i + 1]);

describe("peakSteps", () => {
  it("returns an index that is actually a peak", () => {
    for (const nums of [[1, 2, 3, 1], [1, 2, 1, 3, 5, 6, 4], [1], [2, 1]]) {
      const p = peak(nums)!;
      expect(isPeak(nums, p)).toBe(true);
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of peakSteps([1, 2, 1, 3, 5, 6, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
