import { describe, it, expect } from "vitest";
import { pivotSteps } from "./algorithm";
import { CODE } from "./code";

const pivot = (nums: number[]) => {
  const steps = pivotSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("pivotSteps", () => {
  it("finds the pivot index", () => {
    expect(pivot([1, 7, 3, 6, 5, 6])).toBe(3);
    expect(pivot([2, 1, -1])).toBe(0);
  });

  it("returns -1 when no pivot exists", () => {
    expect(pivot([1, 2, 3])).toBe(-1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of pivotSteps([1, 7, 3, 6, 5, 6])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
