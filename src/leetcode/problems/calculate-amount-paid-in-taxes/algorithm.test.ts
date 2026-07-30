import { describe, it, expect } from "vitest";
import { taxSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (brackets: [number, number][], income: number) => {
  const steps = taxSteps(brackets, income);
  return steps[steps.length - 1].data.answer!;
};

describe("taxSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([[3, 50], [7, 10], [12, 25]], 10)).toBeCloseTo(2.65, 5);
    expect(solve([[1, 0], [4, 25], [5, 50]], 2)).toBeCloseTo(0.25, 5);
    expect(solve([[2, 50]], 0)).toBeCloseTo(0, 5);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of taxSteps([[3, 50], [7, 10], [12, 25]], 10)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
