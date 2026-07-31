import { describe, it, expect } from "vitest";
import { zeroArraySteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[], queries: number[][]) => {
  const steps = zeroArraySteps(nums, queries);
  return steps[steps.length - 1].data.answer;
};

describe("zeroArraySteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([2, 0, 2], [[0, 2, 1], [0, 2, 1], [1, 1, 3]])).toBe(2);
    expect(solve([4, 3, 2, 1], [[1, 3, 2], [0, 2, 1]])).toBe(-1);
    expect(solve([0, 0, 0], [[0, 2, 1]])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of zeroArraySteps([2, 0, 2], [[0, 2, 1], [0, 2, 1], [1, 1, 3]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
