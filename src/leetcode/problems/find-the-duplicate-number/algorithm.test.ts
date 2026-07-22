import { describe, it, expect } from "vitest";
import { duplicateSteps } from "./algorithm";
import { CODE } from "./code";

const dup = (nums: number[]) => {
  const steps = duplicateSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("duplicateSteps", () => {
  it("finds the duplicate value", () => {
    expect(dup([1, 3, 4, 2, 2])).toBe(2);
    expect(dup([3, 1, 3, 4, 2])).toBe(3);
    expect(dup([2, 2, 2, 2, 2])).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of duplicateSteps([1, 3, 4, 2, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
