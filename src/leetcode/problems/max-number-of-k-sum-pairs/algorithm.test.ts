import { describe, it, expect } from "vitest";
import { kSumPairsSteps } from "./algorithm";
import { CODE } from "./code";

const maxOps = (nums: number[], k: number) => {
  const steps = kSumPairsSteps(nums, k);
  return steps[steps.length - 1].data.answer;
};

describe("kSumPairsSteps", () => {
  it("counts the maximum k-sum pair removals", () => {
    expect(maxOps([1, 2, 3, 4], 5)).toBe(2);
    expect(maxOps([3, 1, 3, 4, 3], 6)).toBe(1);
    expect(maxOps([2, 2, 2, 2], 4)).toBe(2);
    expect(maxOps([1, 1, 1], 5)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kSumPairsSteps([3, 1, 3, 4, 3], 6)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
