import { describe, it, expect } from "vitest";
import { zeroArraySteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[], queries: number[][]) => {
  const steps = zeroArraySteps(nums, queries);
  return steps[steps.length - 1].data.answer;
};

describe("zeroArraySteps", () => {
  it("decides whether the array can become all zeros", () => {
    expect(solve([1, 0, 1], [[0, 2]])).toBe(true);
    expect(solve([4, 3, 2, 1], [[1, 3], [0, 2]])).toBe(false);
    expect(solve([1, 2, 1], [[0, 2], [1, 1]])).toBe(true);
    expect(solve([0, 0], [])).toBe(true);
    expect(solve([1], [])).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of zeroArraySteps([1, 2, 1], [[0, 2], [1, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
