import { describe, it, expect } from "vitest";
import { lisSteps } from "./algorithm";
import { CODE } from "./code";

const lis = (nums: number[]) => {
  const steps = lisSteps(nums);
  return steps[steps.length - 1].data.best;
};

describe("lisSteps", () => {
  it("computes the LIS length", () => {
    expect(lis([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
    expect(lis([0, 1, 0, 3, 2, 3])).toBe(4);
    expect(lis([7, 7, 7, 7])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of lisSteps([10, 9, 2, 5, 3, 7, 101, 18])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
