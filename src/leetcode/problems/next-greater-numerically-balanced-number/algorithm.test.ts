import { describe, it, expect } from "vitest";
import { balancedSteps } from "./algorithm";
import { CODE } from "./code";

const next = (n: number) => {
  const steps = balancedSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("balancedSteps", () => {
  it("finds the next numerically balanced number", () => {
    expect(next(1)).toBe(22);
    expect(next(1000)).toBe(1333);
    expect(next(3000)).toBe(3133);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of balancedSteps(1000)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
