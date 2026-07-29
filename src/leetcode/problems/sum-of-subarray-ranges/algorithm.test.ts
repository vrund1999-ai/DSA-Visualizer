import { describe, it, expect } from "vitest";
import { subRangesSteps } from "./algorithm";
import { CODE } from "./code";

const sumRanges = (nums: number[]) => {
  const steps = subRangesSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("subRangesSteps", () => {
  it("sums the ranges of every subarray", () => {
    expect(sumRanges([1, 2, 3])).toBe(4);
    expect(sumRanges([1, 3, 3])).toBe(4);
    expect(sumRanges([4, -2, -3, 4, 1])).toBe(59);
    expect(sumRanges([5])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of subRangesSteps([1, 3, 3, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
