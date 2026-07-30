import { describe, it, expect } from "vitest";
import { scoreMarkSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = scoreMarkSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("scoreMarkSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([2, 1, 3, 4, 5, 2])).toBe(7);
    expect(solve([2, 3, 5, 1, 3, 2])).toBe(5);
    expect(solve([1])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of scoreMarkSteps([2, 1, 3, 4, 5, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
