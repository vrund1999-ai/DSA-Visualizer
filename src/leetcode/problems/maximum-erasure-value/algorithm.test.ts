import { describe, it, expect } from "vitest";
import { erasureSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = erasureSteps(nums);
  return steps[steps.length - 1].data.answer;
};

function brute(nums: number[]): number {
  let best = 0;
  for (let i = 0; i < nums.length; i++) {
    const seen = new Set<number>();
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      if (seen.has(nums[j])) break;
      seen.add(nums[j]);
      sum += nums[j];
      best = Math.max(best, sum);
    }
  }
  return best;
}

describe("erasureSteps", () => {
  it("matches a brute-force search", () => {
    for (const nums of [[4, 2, 4, 5, 6], [5, 2, 1, 2, 5, 2, 1, 2, 5], [1, 2, 3, 4], [7], [1, 1, 1]]) {
      expect(solve(nums)).toBe(brute(nums));
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of erasureSteps([4, 2, 4, 5, 6])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
