import { describe, it, expect } from "vitest";
import { perfectSquaresSteps } from "./algorithm";
import { CODE } from "./code";

const numSquares = (n: number) => {
  const steps = perfectSquaresSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("perfectSquaresSteps", () => {
  it("computes the minimum count of perfect squares", () => {
    expect(numSquares(12)).toBe(3); // 4+4+4
    expect(numSquares(13)).toBe(2); // 4+9
    expect(numSquares(1)).toBe(1);
    expect(numSquares(4)).toBe(1);
    expect(numSquares(7)).toBe(4); // 4+1+1+1
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of perfectSquaresSteps(12)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
