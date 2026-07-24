import { describe, it, expect } from "vitest";
import { contiguousSteps } from "./algorithm";
import { CODE } from "./code";

const maxLen = (nums: number[]) => {
  const steps = contiguousSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("contiguousSteps", () => {
  it("finds the longest balanced subarray", () => {
    expect(maxLen([0, 1])).toBe(2);
    expect(maxLen([0, 1, 0])).toBe(2);
    expect(maxLen([0, 1, 0, 0, 1, 1, 0])).toBe(6);
    expect(maxLen([1, 1, 1])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of contiguousSteps([0, 1, 0, 0, 1, 1, 0])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
