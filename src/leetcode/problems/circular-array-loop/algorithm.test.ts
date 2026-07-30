import { describe, it, expect } from "vitest";
import { circularLoopSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = circularLoopSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("circularLoopSteps", () => {
  it("detects valid circular loops", () => {
    expect(solve([2, -1, 1, 2, 2])).toBe(true);
    expect(solve([-1, 2])).toBe(false);
    expect(solve([-2, 1, -1, -2, -2])).toBe(false);
    expect(solve([1, 1, 2])).toBe(true);
    expect(solve([3, 1, 2])).toBe(true);
  });

  it("does not mutate the caller's array", () => {
    const nums = [2, -1, 1, 2, 2];
    circularLoopSteps(nums);
    expect(nums).toEqual([2, -1, 1, 2, 2]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of circularLoopSteps([2, -1, 1, 2, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
