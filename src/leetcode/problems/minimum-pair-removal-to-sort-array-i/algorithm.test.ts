import { describe, it, expect } from "vitest";
import { pairRemovalSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = pairRemovalSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("pairRemovalSteps", () => {
  it("counts the minimum merge operations", () => {
    expect(solve([5, 2, 3, 1])).toBe(2);
    expect(solve([1, 2, 2])).toBe(0);
    expect(solve([2, 1])).toBe(1);
    expect(solve([3, 1, 2])).toBe(1);
  });

  it("does not mutate the caller's array", () => {
    const nums = [5, 2, 3, 1];
    pairRemovalSteps(nums);
    expect(nums).toEqual([5, 2, 3, 1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of pairRemovalSteps([5, 2, 3, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
