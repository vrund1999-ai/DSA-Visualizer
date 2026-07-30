import { describe, it, expect } from "vitest";
import { energySteps } from "./algorithm";
import { CODE } from "./code";

const solve = (energy: number[], k: number) => {
  const steps = energySteps(energy, k);
  return steps[steps.length - 1].data.answer;
};

describe("energySteps", () => {
  it("computes the maximum energy chain", () => {
    expect(solve([5, 2, -10, -5, 1], 3)).toBe(3);
    expect(solve([-2, -3, -1], 2)).toBe(-1);
    expect(solve([1, 2, 3], 1)).toBe(6);
    expect(solve([10], 1)).toBe(10);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of energySteps([5, 2, -10, -5, 1], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
