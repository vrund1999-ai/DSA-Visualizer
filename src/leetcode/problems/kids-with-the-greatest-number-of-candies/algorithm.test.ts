import { describe, it, expect } from "vitest";
import { candiesSteps } from "./algorithm";
import { CODE } from "./code";

const kids = (candies: number[], extra: number) => {
  const steps = candiesSteps(candies, extra);
  return steps[steps.length - 1].data.answer;
};

describe("candiesSteps", () => {
  it("marks kids who can reach the maximum", () => {
    expect(kids([2, 3, 5, 1, 3], 3)).toEqual([true, true, true, false, true]);
    expect(kids([4, 2, 1, 1, 2], 1)).toEqual([true, false, false, false, false]);
    expect(kids([12, 1, 12], 10)).toEqual([true, false, true]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of candiesSteps([2, 3, 5, 1, 3], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
