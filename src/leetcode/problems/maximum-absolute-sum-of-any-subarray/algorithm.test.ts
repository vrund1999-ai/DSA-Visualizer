import { describe, it, expect } from "vitest";
import { absSumSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = absSumSteps(nums);
  return steps[steps.length - 1].data.answer;
};

function brute(nums: number[]): number {
  let best = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      best = Math.max(best, Math.abs(sum));
    }
  }
  return best;
}

describe("absSumSteps", () => {
  it("matches a brute-force search", () => {
    for (const nums of [[1, -3, 2, 3, -4], [2, -5, 1, -4, 3, -2], [1, 2, 3], [-1, -2, -3], [5]]) {
      expect(solve(nums)).toBe(brute(nums));
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of absSumSteps([1, -3, 2, 3, -4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
