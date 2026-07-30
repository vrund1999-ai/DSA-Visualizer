import { describe, it, expect } from "vitest";
import { monotonicSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = monotonicSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("monotonicSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([1, 2, 2, 3])).toBe(true);
    expect(solve([6, 5, 4, 4])).toBe(true);
    expect(solve([1, 3, 2])).toBe(false);
    expect(solve([1, 1, 1])).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of monotonicSteps([1, 2, 2, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
