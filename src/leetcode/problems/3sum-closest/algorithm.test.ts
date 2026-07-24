import { describe, it, expect } from "vitest";
import { threeSumClosestSteps } from "./algorithm";
import { CODE } from "./code";

const closest = (nums: number[], target: number) => {
  const steps = threeSumClosestSteps({ nums, target });
  return steps[steps.length - 1].data.best;
};

describe("threeSumClosestSteps", () => {
  it("finds the closest triple sum", () => {
    expect(closest([-1, 2, 1, -4], 1)).toBe(2);
    expect(closest([0, 0, 0], 1)).toBe(0);
    expect(closest([1, 1, 1, 0], -100)).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of threeSumClosestSteps({ nums: [-1, 2, 1, -4], target: 1 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
