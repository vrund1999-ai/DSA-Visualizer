import { describe, it, expect } from "vitest";
import { middleIndexSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = middleIndexSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("middleIndexSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([2, 3, -1, 8, 4])).toBe(3);
    expect(solve([1, -1, 4])).toBe(2);
    expect(solve([2, 5])).toBe(-1);
    expect(solve([1])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of middleIndexSteps([2, 3, -1, 8, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
