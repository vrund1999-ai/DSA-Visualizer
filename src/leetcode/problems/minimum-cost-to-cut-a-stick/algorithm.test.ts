import { describe, it, expect } from "vitest";
import { cutStickSteps } from "./algorithm";
import { CODE } from "./code";

const minCost = (n: number, cuts: number[]) => {
  const steps = cutStickSteps(n, cuts);
  return steps[steps.length - 1].data.answer;
};

// brute force over all cut orders (cuts are distinct per the problem constraints)
const brute = (n: number, cuts: number[]): number => {
  const solve = (lo: number, hi: number, cs: number[]): number => {
    if (cs.length === 0) return 0;
    let best = Infinity;
    for (const c of cs) {
      const left = cs.filter((x) => x < c);
      const right = cs.filter((x) => x > c);
      best = Math.min(best, hi - lo + solve(lo, c, left) + solve(c, hi, right));
    }
    return best;
  };
  return solve(0, n, cuts);
};

describe("cutStickSteps", () => {
  it("computes the minimum cutting cost", () => {
    expect(minCost(7, [1, 3, 4, 5])).toBe(16);
    expect(minCost(9, [5, 6, 1, 4, 2])).toBe(brute(9, [5, 6, 1, 4, 2]));
    expect(minCost(10, [4])).toBe(10);
    expect(minCost(20, [15, 10, 5, 2])).toBe(brute(20, [15, 10, 5, 2]));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of cutStickSteps(7, [1, 3, 4, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
