import { describe, it, expect } from "vitest";
import { heightCheckerSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (heights: number[]) => {
  const steps = heightCheckerSteps(heights);
  return steps[steps.length - 1].data.answer;
};

describe("heightCheckerSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([1, 1, 4, 2, 1, 3])).toBe(3);
    expect(solve([5, 1, 2, 3, 4])).toBe(5);
    expect(solve([1, 2, 3, 4, 5])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of heightCheckerSteps([1, 1, 4, 2, 1, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
