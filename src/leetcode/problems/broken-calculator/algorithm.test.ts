import { describe, it, expect } from "vitest";
import { brokenCalcSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (startValue: number, target: number) => {
  const steps = brokenCalcSteps(startValue, target);
  return steps[steps.length - 1].data.answer;
};

describe("brokenCalcSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve(2, 3)).toBe(2);
    expect(solve(5, 8)).toBe(2);
    expect(solve(3, 10)).toBe(3);
    expect(solve(1024, 1)).toBe(1023);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of brokenCalcSteps(3, 10)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
