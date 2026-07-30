import { describe, it, expect } from "vitest";
import { tripletSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = tripletSteps(nums);
  return steps[steps.length - 1].data.answer;
};

function brute(nums: number[]): number {
  let best = 0;
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++)
      for (let k = j + 1; k < nums.length; k++) best = Math.max(best, (nums[i] - nums[j]) * nums[k]);
  return best;
}

describe("tripletSteps", () => {
  it("matches a brute-force search", () => {
    for (const nums of [[12, 6, 1, 2, 7], [1, 10, 3, 4, 19], [1, 2, 3], [5, 4, 3, 2, 1], [1000000, 1, 1000000]]) {
      expect(solve(nums)).toBe(brute(nums));
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of tripletSteps([12, 6, 1, 2, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
