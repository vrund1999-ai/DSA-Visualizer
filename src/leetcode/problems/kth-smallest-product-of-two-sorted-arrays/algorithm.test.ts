import { describe, it, expect } from "vitest";
import { kthProductSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums1: number[], nums2: number[], k: number) => {
  const steps = kthProductSteps(nums1, nums2, k);
  return steps[steps.length - 1].data.answer;
};

/** brute-force reference over all products. */
const brute = (nums1: number[], nums2: number[], k: number) => {
  const prods: number[] = [];
  for (const a of nums1) for (const b of nums2) prods.push(a * b + 0); // +0 normalizes -0
  prods.sort((x, y) => x - y);
  return prods[k - 1];
};

describe("kthProductSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([2, 5], [3, 4], 2)).toBe(8);
    expect(solve([-4, -2, 0, 3], [2, 4], 6)).toBe(0);
    expect(solve([-2, -1, 0, 1, 2], [-3, -1, 2, 4, 5], 3)).toBe(-6);
  });

  it("agrees with a brute-force reference", () => {
    const a = [-5, -3, 1, 4, 6];
    const b = [-2, 0, 3, 7];
    for (let k = 1; k <= a.length * b.length; k++) {
      expect(solve(a, b, k)).toBe(brute(a, b, k));
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kthProductSteps([2, 5], [3, 4], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
