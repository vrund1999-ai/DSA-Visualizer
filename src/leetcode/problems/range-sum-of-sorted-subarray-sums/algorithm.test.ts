import { describe, it, expect } from "vitest";
import { rangeSumSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[], left: number, right: number) => {
  const steps = rangeSumSteps(nums, left, right);
  return steps[steps.length - 1].data.answer;
};

describe("rangeSumSteps", () => {
  it("sums the sorted subarray sums over a rank range", () => {
    expect(solve([1, 2, 3, 4], 1, 5)).toBe(13);
    expect(solve([1, 2, 3, 4], 3, 4)).toBe(6);
    expect(solve([1, 2, 3, 4], 1, 10)).toBe(50);
    expect(solve([4, 3, 2, 1], 1, 3)).toBe(6);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rangeSumSteps([1, 2, 3, 4], 1, 5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
