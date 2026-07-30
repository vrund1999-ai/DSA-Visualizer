import { describe, it, expect } from "vitest";
import { lcisSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = lcisSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("lcisSteps", () => {
  it("finds the longest continuous increasing run", () => {
    expect(solve([1, 3, 5, 4, 7])).toBe(3);
    expect(solve([2, 2, 2, 2, 2])).toBe(1);
    expect(solve([1, 2, 3, 4, 5])).toBe(5);
    expect(solve([5, 4, 3, 2, 1])).toBe(1);
    expect(solve([])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of lcisSteps([1, 3, 5, 4, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
