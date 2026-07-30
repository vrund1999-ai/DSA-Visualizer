import { describe, it, expect } from "vitest";
import { champagneSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (poured: number, qRow: number, qGlass: number) => {
  const steps = champagneSteps(poured, qRow, qGlass);
  return steps[steps.length - 1].data.answer;
};

describe("champagneSteps", () => {
  it("computes how full the queried glass is", () => {
    expect(solve(1, 1, 1)).toBeCloseTo(0.0, 5);
    expect(solve(2, 1, 1)).toBeCloseTo(0.5, 5);
    expect(solve(100000009, 33, 17)).toBeCloseTo(1.0, 5);
    expect(solve(6, 3, 1)).toBeCloseTo(0.25, 4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of champagneSteps(6, 3, 1)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
