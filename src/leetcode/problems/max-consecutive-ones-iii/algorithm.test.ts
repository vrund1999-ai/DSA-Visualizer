import { describe, it, expect } from "vitest";
import { maxOnesSteps } from "./algorithm";
import { CODE } from "./code";

const longest = (nums: number[], k: number) => {
  const steps = maxOnesSteps(nums, k);
  return steps[steps.length - 1].data.answer;
};

describe("maxOnesSteps", () => {
  it("finds the longest window with ≤k zeros", () => {
    expect(longest([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6);
    expect(longest([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)).toBe(10);
    expect(longest([0, 0, 0], 0)).toBe(0);
    expect(longest([1, 1, 1], 1)).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxOnesSteps([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
