import { describe, it, expect } from "vitest";
import { maxFreqSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = maxFreqSteps(nums);
  return steps[steps.length - 1].data.total;
};

describe("maxFreqSteps", () => {
  it("sums the counts of the most frequent values", () => {
    expect(solve([1, 2, 2, 3, 1, 4])).toBe(4);
    expect(solve([1, 2, 3, 4, 5])).toBe(5);
    expect(solve([9, 9, 9])).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxFreqSteps([1, 2, 2, 3, 1, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
