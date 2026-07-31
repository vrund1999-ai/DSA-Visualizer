import { describe, it, expect } from "vitest";
import { makeZeroSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = makeZeroSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("makeZeroSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([1, 0, 2, 0, 3])).toBe(2);
    expect(solve([2, 3, 4, 0, 4, 1, 0])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of makeZeroSteps([1, 0, 2, 0, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
