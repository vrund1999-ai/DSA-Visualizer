import { describe, it, expect } from "vitest";
import { continuousSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = continuousSteps(nums);
  return steps[steps.length - 1].data.answer;
};

function brute(nums: number[]): number {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let mn = nums[i];
    let mx = nums[i];
    for (let j = i; j < nums.length; j++) {
      mn = Math.min(mn, nums[j]);
      mx = Math.max(mx, nums[j]);
      if (mx - mn <= 2) total++;
    }
  }
  return total;
}

describe("continuousSteps", () => {
  it("matches a brute-force count", () => {
    for (const nums of [[5, 4, 2, 4], [1, 2, 3], [1, 1, 1], [10, 1, 5, 3, 8], [4]]) {
      expect(solve(nums)).toBe(brute(nums));
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of continuousSteps([5, 4, 2, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
