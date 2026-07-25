import { describe, it, expect } from "vitest";
import { fairPairsSteps } from "./algorithm";
import { CODE } from "./code";

const fair = (nums: number[], lower: number, upper: number) => {
  const steps = fairPairsSteps(nums, lower, upper);
  return steps[steps.length - 1].data.answer;
};

const brute = (nums: number[], lower: number, upper: number) => {
  let c = 0;
  for (let i = 0; i < nums.length; i++) for (let j = i + 1; j < nums.length; j++) {
    const s = nums[i] + nums[j];
    if (s >= lower && s <= upper) c++;
  }
  return c;
};

describe("fairPairsSteps", () => {
  it("counts fair pairs", () => {
    expect(fair([0, 1, 7, 4, 4, 5], 3, 6)).toBe(6);
    expect(fair([1, 7, 9, 2, 5], 11, 11)).toBe(1);
    const rand = [3, -1, 4, 1, 5, -9, 2, 6];
    expect(fair(rand, -2, 7)).toBe(brute(rand, -2, 7));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of fairPairsSteps([0, 1, 7, 4, 4, 5], 3, 6)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
