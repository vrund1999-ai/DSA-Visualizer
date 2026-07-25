import { describe, it, expect } from "vitest";
import { pivotArraySteps } from "./algorithm";
import { CODE } from "./code";

const pivot = (nums: number[], p: number) => {
  const steps = pivotArraySteps(nums, p);
  const { less, equal, greater } = steps[steps.length - 1].data;
  return [...less, ...equal, ...greater];
};

describe("pivotArraySteps", () => {
  it("partitions around the pivot stably", () => {
    expect(pivot([9, 12, 5, 10, 14, 3, 10], 10)).toEqual([9, 5, 3, 10, 10, 12, 14]);
    expect(pivot([-3, 4, 3, 2], 2)).toEqual([-3, 2, 4, 3]);
    expect(pivot([1, 1, 1], 1)).toEqual([1, 1, 1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of pivotArraySteps([9, 12, 5, 10, 14, 3, 10], 10)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
