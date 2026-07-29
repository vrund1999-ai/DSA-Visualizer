import { describe, it, expect } from "vitest";
import { equalPairsSteps } from "./algorithm";
import { CODE } from "./code";

const canDivide = (nums: number[]) => {
  const steps = equalPairsSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("equalPairsSteps", () => {
  it("checks whether the array pairs evenly", () => {
    expect(canDivide([3, 2, 3, 2, 2, 2])).toBe(true);
    expect(canDivide([1, 2, 3, 4])).toBe(false);
    expect(canDivide([1, 1])).toBe(true);
    expect(canDivide([1, 1, 1])).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of equalPairsSteps([3, 2, 3, 2, 2, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
