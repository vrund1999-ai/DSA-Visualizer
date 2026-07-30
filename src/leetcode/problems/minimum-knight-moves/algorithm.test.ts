import { describe, it, expect } from "vitest";
import { knightMovesSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (x: number, y: number) => {
  const steps = knightMovesSteps(x, y);
  return steps[steps.length - 1].data.answer;
};

describe("knightMovesSteps", () => {
  it("computes the minimum knight moves", () => {
    expect(solve(2, 1)).toBe(1);
    expect(solve(5, 5)).toBe(4);
    expect(solve(0, 0)).toBe(0);
    expect(solve(1, 1)).toBe(2);
    expect(solve(2, 2)).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of knightMovesSteps(5, 5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
