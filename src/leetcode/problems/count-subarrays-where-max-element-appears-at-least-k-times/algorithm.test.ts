import { describe, it, expect } from "vitest";
import { countMaxSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[], k: number) => {
  const steps = countMaxSteps(nums, k);
  return steps[steps.length - 1].data.answer;
};

// O(n^2) reference.
function brute(nums: number[], k: number): number {
  const mx = Math.max(...nums);
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let c = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] === mx) c++;
      if (c >= k) total++;
    }
  }
  return total;
}

describe("countMaxSteps", () => {
  it("matches a brute-force count", () => {
    const cases: [number[], number][] = [
      [[1, 3, 2, 3, 3], 2],
      [[1, 4, 2, 1], 3],
      [[5, 5, 5], 1],
      [[2, 1, 2, 1, 2], 2],
    ];
    for (const [nums, k] of cases) expect(solve(nums, k)).toBe(brute(nums, k));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of countMaxSteps([1, 3, 2, 3, 3], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
