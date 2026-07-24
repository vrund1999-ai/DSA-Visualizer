import { describe, it, expect } from "vitest";
import { shipSteps } from "./algorithm";
import { CODE } from "./code";

const cap = (weights: number[], days: number) => {
  const steps = shipSteps(weights, days);
  return steps[steps.length - 1].data.answer;
};

describe("shipSteps", () => {
  it("finds the minimum feasible capacity", () => {
    expect(cap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(15);
    expect(cap([3, 2, 2, 4, 1, 4], 3)).toBe(6);
    expect(cap([1, 2, 3, 1, 1], 4)).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of shipSteps([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
