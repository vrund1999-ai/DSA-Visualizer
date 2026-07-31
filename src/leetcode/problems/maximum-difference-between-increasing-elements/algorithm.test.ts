import { describe, it, expect } from "vitest";
import { maxDiffSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = maxDiffSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("maxDiffSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([7, 1, 5, 4])).toBe(4);
    expect(solve([9, 4, 3, 2])).toBe(-1);
    expect(solve([1, 5, 2, 10])).toBe(9);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxDiffSteps([7, 1, 5, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
