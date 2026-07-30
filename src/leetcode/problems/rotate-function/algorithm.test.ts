import { describe, it, expect } from "vitest";
import { rotateSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = rotateSteps(nums);
  return steps[steps.length - 1].data.answer;
};

// Reference: compute F(k) directly for every rotation.
function brute(nums: number[]): number {
  const n = nums.length;
  let best = -Infinity;
  for (let k = 0; k < n; k++) {
    let f = 0;
    for (let i = 0; i < n; i++) f += i * nums[(i - k + n * k) % n];
    best = Math.max(best, f);
  }
  return best;
}

describe("rotateSteps", () => {
  it("matches a direct computation of every rotation", () => {
    for (const nums of [[4, 3, 2, 6], [100], [1, 2, 3, 4, 5], [-2147483648, -2147483648], [0, 0, 0]]) {
      expect(solve(nums)).toBe(brute(nums));
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rotateSteps([4, 3, 2, 6])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
