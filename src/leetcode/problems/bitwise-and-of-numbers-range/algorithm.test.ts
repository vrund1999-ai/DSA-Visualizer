import { describe, it, expect } from "vitest";
import { rangeAndSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (left: number, right: number) => {
  const steps = rangeAndSteps(left, right);
  return steps[steps.length - 1].data.answer;
};

describe("rangeAndSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve(5, 7)).toBe(4);
    expect(solve(0, 0)).toBe(0);
    expect(solve(1, 2147483647)).toBe(0);
    expect(solve(12, 15)).toBe(12);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rangeAndSteps(5, 7)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
