import { describe, it, expect } from "vitest";
import { ballsSteps } from "./algorithm";
import { CODE } from "./code";

const minSize = (nums: number[], maxOps: number) => {
  const steps = ballsSteps(nums, maxOps);
  return steps[steps.length - 1].data.answer;
};

describe("ballsSteps", () => {
  it("minimizes the maximum bag size", () => {
    expect(minSize([9], 2)).toBe(3);
    expect(minSize([2, 4, 8, 2], 4)).toBe(2);
    expect(minSize([7, 17], 2)).toBe(7);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of ballsSteps([2, 4, 8, 2], 4)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
