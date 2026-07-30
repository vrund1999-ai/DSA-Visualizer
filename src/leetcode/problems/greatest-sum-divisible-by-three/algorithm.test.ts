import { describe, it, expect } from "vitest";
import { divThreeSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = divThreeSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("divThreeSteps", () => {
  it("finds the greatest sum divisible by three", () => {
    expect(solve([3, 6, 5, 1, 8])).toBe(18);
    expect(solve([4])).toBe(0);
    expect(solve([1, 2, 3, 4, 4])).toBe(12);
    expect(solve([9, 9, 9])).toBe(27);
    expect(solve([2])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of divThreeSteps([3, 6, 5, 1, 8])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
