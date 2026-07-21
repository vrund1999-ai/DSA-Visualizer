import { describe, it, expect } from "vitest";
import { containsDupSteps } from "./algorithm";
import { CODE } from "./code";

const hasDup = (nums: number[]) => {
  const steps = containsDupSteps(nums);
  return steps[steps.length - 1].data.result;
};

describe("containsDupSteps", () => {
  it("detects duplicates", () => {
    expect(hasDup([1, 2, 3, 1])).toBe(true);
    expect(hasDup([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  it("returns false when all unique", () => {
    expect(hasDup([1, 2, 3, 4])).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of containsDupSteps([1, 2, 3, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
