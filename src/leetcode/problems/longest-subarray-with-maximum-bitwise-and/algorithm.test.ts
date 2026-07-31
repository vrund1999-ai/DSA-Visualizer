import { describe, it, expect } from "vitest";
import { maxAndSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = maxAndSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("maxAndSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([1, 2, 3, 3, 2, 2])).toBe(2);
    expect(solve([1, 2, 3, 4])).toBe(1);
    expect(solve([5, 5, 5])).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxAndSteps([1, 2, 3, 3, 2, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
