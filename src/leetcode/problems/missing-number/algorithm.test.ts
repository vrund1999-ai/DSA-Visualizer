import { describe, it, expect } from "vitest";
import { missingSteps } from "./algorithm";
import { CODE } from "./code";

const missing = (nums: number[]) => {
  const steps = missingSteps(nums);
  return steps[steps.length - 1].data.acc;
};

describe("missingSteps", () => {
  it("finds the missing number", () => {
    expect(missing([3, 0, 1])).toBe(2);
    expect(missing([0, 1])).toBe(2);
    expect(missing([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of missingSteps([3, 0, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
