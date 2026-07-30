import { describe, it, expect } from "vitest";
import { candiesSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (candies: number[], k: number) => {
  const steps = candiesSteps(candies, k);
  return steps[steps.length - 1].data.answer;
};

describe("candiesSteps", () => {
  it("finds the maximum allocatable pile size", () => {
    expect(solve([5, 8, 6], 3)).toBe(5);
    expect(solve([2, 5], 11)).toBe(0);
    expect(solve([1, 2, 3, 4, 10], 5)).toBe(3);
    expect(solve([4, 7, 5], 4)).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of candiesSteps([5, 8, 6], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
