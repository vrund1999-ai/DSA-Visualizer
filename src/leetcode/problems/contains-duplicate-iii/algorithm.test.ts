import { describe, it, expect } from "vitest";
import { dupIIISteps } from "./algorithm";
import { CODE } from "./code";

const contains = (nums: number[], k: number, t: number) => {
  const steps = dupIIISteps(nums, k, t);
  return steps[steps.length - 1].data.answer;
};

describe("dupIIISteps", () => {
  it("detects near-duplicates within index and value bounds", () => {
    expect(contains([1, 2, 3, 1], 3, 0)).toBe(true);
    expect(contains([1, 5, 9, 1, 5, 9], 2, 3)).toBe(false);
    expect(contains([1, 2, 2, 3], 2, 0)).toBe(true);
    expect(contains([2, 2], 3, 0)).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of dupIIISteps([1, 5, 9, 1, 5, 9], 2, 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
