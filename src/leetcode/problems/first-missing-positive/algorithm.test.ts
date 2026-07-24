import { describe, it, expect } from "vitest";
import { firstMissingSteps } from "./algorithm";
import { CODE } from "./code";

const missing = (nums: number[]) => {
  const steps = firstMissingSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("firstMissingSteps", () => {
  it("finds the smallest missing positive", () => {
    expect(missing([1, 2, 0])).toBe(3);
    expect(missing([3, 4, -1, 1])).toBe(2);
    expect(missing([7, 8, 9, 11, 12])).toBe(1);
    expect(missing([1, 2, 3])).toBe(4);
    expect(missing([2, 2, 2])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of firstMissingSteps([3, 4, -1, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
