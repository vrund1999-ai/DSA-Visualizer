import { describe, it, expect } from "vitest";
import { maxOnesSteps } from "./algorithm";
import { CODE } from "./code";

const best = (nums: number[]) => {
  const steps = maxOnesSteps(nums);
  return steps[steps.length - 1].data.best;
};

describe("maxOnesSteps", () => {
  it("finds the longest run of 1s", () => {
    expect(best([1, 1, 0, 1, 1, 1])).toBe(3);
    expect(best([1, 0, 1, 1, 0, 1])).toBe(2);
    expect(best([0, 0])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxOnesSteps([1, 1, 0, 1, 1, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
