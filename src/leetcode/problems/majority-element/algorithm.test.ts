import { describe, it, expect } from "vitest";
import { majoritySteps } from "./algorithm";
import { CODE } from "./code";

const majority = (nums: number[]) => {
  const steps = majoritySteps(nums);
  return steps[steps.length - 1].data.candidate;
};

describe("majoritySteps", () => {
  it("finds the majority element", () => {
    expect(majority([3, 2, 3])).toBe(3);
    expect(majority([2, 2, 1, 1, 1, 2, 2])).toBe(2);
    expect(majority([1])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of majoritySteps([2, 2, 1, 1, 1, 2, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
