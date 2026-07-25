import { describe, it, expect } from "vitest";
import { reversePairsSteps } from "./algorithm";
import { CODE } from "./code";

const countPairs = (nums: number[]) => {
  const steps = reversePairsSteps(nums);
  return steps[steps.length - 1].data.answer;
};

const brute = (nums: number[]) => {
  let c = 0;
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++) if (nums[i] > 2 * nums[j]) c++;
  return c;
};

describe("reversePairsSteps", () => {
  it("matches the brute-force reverse-pair count", () => {
    expect(countPairs([1, 3, 2, 3, 1])).toBe(2);
    expect(countPairs([2, 4, 3, 5, 1])).toBe(3);
    expect(countPairs([1, 2, 3, 4])).toBe(0);
    const rand = [7, 1, 9, 2, 8, 3, 6, 4, 10, 0];
    expect(countPairs(rand)).toBe(brute(rand));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of reversePairsSteps([1, 3, 2, 3, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
