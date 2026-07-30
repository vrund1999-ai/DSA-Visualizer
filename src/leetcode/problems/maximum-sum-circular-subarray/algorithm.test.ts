import { describe, it, expect } from "vitest";
import { circularSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = circularSteps(nums);
  return steps[steps.length - 1].data.answer;
};

// Brute-force over all circular subarrays.
function brute(nums: number[]): number {
  const n = nums.length;
  let best = -Infinity;
  for (let start = 0; start < n; start++) {
    let sum = 0;
    for (let len = 1; len <= n; len++) {
      sum += nums[(start + len - 1) % n];
      best = Math.max(best, sum);
    }
  }
  return best;
}

describe("circularSteps", () => {
  it("matches a brute-force circular scan", () => {
    for (const nums of [[5, -3, 5], [1, -2, 3, -2], [3, -1, 2, -1], [-3, -2, -3], [-5], [8, -1, 3, 4]]) {
      expect(solve(nums)).toBe(brute(nums));
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of circularSteps([5, -3, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
