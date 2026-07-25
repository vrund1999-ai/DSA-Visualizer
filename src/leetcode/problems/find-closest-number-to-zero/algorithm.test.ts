import { describe, it, expect } from "vitest";
import { closestZeroSteps } from "./algorithm";
import { CODE } from "./code";

const closest = (nums: number[]) => {
  const steps = closestZeroSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("closestZeroSteps", () => {
  it("returns the value nearest zero, larger on ties", () => {
    expect(closest([-4, -2, 1, 4, 8])).toBe(1);
    expect(closest([2, -1, 1])).toBe(1);
    expect(closest([-2, 2])).toBe(2);
    expect(closest([5])).toBe(5);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of closestZeroSteps([-4, -2, 1, 4, 8, -2, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
