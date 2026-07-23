import { describe, it, expect } from "vitest";
import { maxAvgSteps } from "./algorithm";
import { CODE } from "./code";

const maxAvg = (nums: number[], k: number) => {
  const steps = maxAvgSteps({ nums, k });
  return steps[steps.length - 1].data.bestSum / k;
};

describe("maxAvgSteps", () => {
  it("finds the maximum average window", () => {
    expect(maxAvg([1, 12, -5, -6, 50, 3], 4)).toBeCloseTo(12.75, 5);
    expect(maxAvg([5], 1)).toBe(5);
    expect(maxAvg([0, 4, 0, 3, 2], 1)).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxAvgSteps({ nums: [1, 12, -5, -6, 50, 3], k: 4 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
