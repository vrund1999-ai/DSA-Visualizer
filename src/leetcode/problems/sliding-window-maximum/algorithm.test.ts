import { describe, it, expect } from "vitest";
import { slidingMaxSteps } from "./algorithm";
import { CODE } from "./code";

const maxes = (nums: number[], k: number) => {
  const steps = slidingMaxSteps({ nums, k });
  return steps[steps.length - 1].data.result;
};

describe("slidingMaxSteps", () => {
  it("computes the max of each window", () => {
    expect(maxes([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7]);
    expect(maxes([1], 1)).toEqual([1]);
    expect(maxes([9, 8, 7, 6], 2)).toEqual([9, 8, 7]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of slidingMaxSteps({ nums: [1, 3, -1, -3, 5, 3, 6, 7], k: 3 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
