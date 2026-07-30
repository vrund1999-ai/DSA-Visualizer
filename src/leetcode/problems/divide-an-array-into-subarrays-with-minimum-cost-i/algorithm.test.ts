import { describe, it, expect } from "vitest";
import { divideCostSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = divideCostSteps(nums);
  return steps[steps.length - 1].data.cost;
};

describe("divideCostSteps", () => {
  it("sums the first element and the two smallest of the rest", () => {
    expect(solve([1, 2, 3, 12])).toBe(6);
    expect(solve([5, 4, 3])).toBe(12);
    expect(solve([10, 3, 1, 1])).toBe(12);
    expect(solve([1, 3, 2, 12, 8])).toBe(6);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of divideCostSteps([1, 3, 2, 12, 8])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
