import { describe, it, expect } from "vitest";
import { numLisSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = numLisSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("numLisSteps", () => {
  it("counts the longest increasing subsequences", () => {
    expect(solve([1, 3, 5, 4, 7])).toBe(2);
    expect(solve([2, 2, 2, 2, 2])).toBe(5);
    expect(solve([1, 2, 4, 3, 5, 4, 7, 2])).toBe(3);
    expect(solve([1])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of numLisSteps([1, 3, 5, 4, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
