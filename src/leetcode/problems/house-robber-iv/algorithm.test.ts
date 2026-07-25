import { describe, it, expect } from "vitest";
import { robberIVSteps } from "./algorithm";
import { CODE } from "./code";

const minCap = (nums: number[], k: number) => {
  const steps = robberIVSteps(nums, k);
  return steps[steps.length - 1].data.answer;
};

describe("robberIVSteps", () => {
  it("finds the minimum capability", () => {
    expect(minCap([2, 3, 5, 9], 2)).toBe(5);
    expect(minCap([2, 7, 9, 3, 1], 2)).toBe(2);
    expect(minCap([1, 2, 3, 4, 5, 6], 3)).toBe(5);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of robberIVSteps([2, 3, 5, 9], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
