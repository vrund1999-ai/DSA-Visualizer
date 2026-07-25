import { describe, it, expect } from "vitest";
import { pairDistSteps } from "./algorithm";
import { CODE } from "./code";

const kth = (nums: number[], k: number) => {
  const steps = pairDistSteps(nums, k);
  return steps[steps.length - 1].data.answer;
};

// brute-force reference: all pair distances sorted
const brute = (nums: number[], k: number) => {
  const ds: number[] = [];
  for (let i = 0; i < nums.length; i++) for (let j = i + 1; j < nums.length; j++) ds.push(Math.abs(nums[i] - nums[j]));
  ds.sort((a, b) => a - b);
  return ds[k - 1];
};

describe("pairDistSteps", () => {
  it("matches the brute-force k-th smallest distance", () => {
    expect(kth([1, 3, 1], 1)).toBe(0);
    expect(kth([1, 1, 1], 2)).toBe(0);
    expect(kth([1, 6, 1], 3)).toBe(5);
    const rand = [4, 2, 9, 1, 7, 3];
    expect(kth(rand, 5)).toBe(brute(rand, 5));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of pairDistSteps([1, 6, 1, 3, 8], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
