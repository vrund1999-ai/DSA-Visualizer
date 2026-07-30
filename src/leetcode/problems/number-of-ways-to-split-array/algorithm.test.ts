import { describe, it, expect } from "vitest";
import { splitSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[]) => {
  const steps = splitSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("splitSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([10, 4, -8, 7])).toBe(2);
    expect(solve([2, 3, 1, 0])).toBe(2);
    expect(solve([1, 1, 1])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of splitSteps([10, 4, -8, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
