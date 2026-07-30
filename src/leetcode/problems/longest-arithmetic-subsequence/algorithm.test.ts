import { describe, it, expect } from "vitest";
import { arithSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = arithSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("arithSteps", () => {
  it("finds the longest arithmetic subsequence length", () => {
    expect(solve([3, 6, 9, 12])).toBe(4);
    expect(solve([9, 4, 7, 2, 10])).toBe(3);
    expect(solve([20, 1, 15, 3, 10, 5, 8])).toBe(4);
    expect(solve([5])).toBe(1);
    expect(solve([1, 2])).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of arithSteps([9, 4, 7, 2, 10])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
