import { describe, it, expect } from "vitest";
import { maxSubKSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[], k: number) => {
  const steps = maxSubKSteps(nums, k);
  return steps[steps.length - 1].data.answer;
};

// Brute-force over subarrays with length divisible by k.
function brute(nums: number[], k: number): number {
  let best = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if ((j - i + 1) % k === 0) best = Math.max(best, sum);
    }
  }
  return best;
}

describe("maxSubKSteps", () => {
  it("matches a brute-force search", () => {
    const cases: [number[], number][] = [
      [[-5, 1, 2, -3, 4], 2],
      [[1, 2], 1],
      [[-1, -2, -3, -4, -5], 4],
      [[2, -1, 3, -2, 5, 1], 3],
    ];
    for (const [nums, k] of cases) expect(solve(nums, k)).toBe(brute(nums, k));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxSubKSteps([-5, 1, 2, -3, 4], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
