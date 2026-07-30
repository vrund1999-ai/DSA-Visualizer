import { describe, it, expect } from "vitest";
import { shortestSubarraySteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[], k: number) => {
  const steps = shortestSubarraySteps(nums, k);
  return steps[steps.length - 1].data.answer;
};

describe("shortestSubarraySteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([1], 1)).toBe(1);
    expect(solve([1, 2], 4)).toBe(-1);
    expect(solve([2, -1, 2], 3)).toBe(3);
    expect(solve([17, 85, 93, -45, -21], 150)).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of shortestSubarraySteps([2, -1, 2, 3, -4, 5], 5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
