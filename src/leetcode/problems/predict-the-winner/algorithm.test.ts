import { describe, it, expect } from "vitest";
import { predictWinnerSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = predictWinnerSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("predictWinnerSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([1, 5, 2])).toBe(false);
    expect(solve([1, 5, 233, 7])).toBe(true);
    expect(solve([1, 1])).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of predictWinnerSteps([1, 5, 233, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
