import { describe, it, expect } from "vitest";
import { maxXorSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = maxXorSteps(nums);
  return steps[steps.length - 1].data.answer;
};

const brute = (nums: number[]) => {
  let best = 0;
  for (let i = 0; i < nums.length; i++) for (let j = i + 1; j < nums.length; j++) best = Math.max(best, nums[i] ^ nums[j]);
  return best;
};

describe("maxXorSteps", () => {
  it("matches the brute-force pairwise maximum", () => {
    for (const nums of [[3, 10, 5, 25, 2, 8], [14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70], [0, 0], [8, 1], [1, 2, 3, 4]]) {
      expect(solve(nums)).toBe(brute(nums));
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxXorSteps([3, 10, 5, 25, 2, 8])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
