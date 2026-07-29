import { describe, it, expect } from "vitest";
import { harmoniousSteps } from "./algorithm";
import { CODE } from "./code";

const lhs = (nums: number[]) => {
  const steps = harmoniousSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("harmoniousSteps", () => {
  it("finds the longest harmonious subsequence", () => {
    expect(lhs([1, 3, 2, 2, 5, 2, 3, 7])).toBe(5);
    expect(lhs([1, 2, 3, 4])).toBe(2);
    expect(lhs([1, 1, 1, 1])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of harmoniousSteps([1, 3, 2, 2, 5, 2, 3, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
