import { describe, it, expect } from "vitest";
import { maxSquareSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (matrix: number[][]) => {
  const steps = maxSquareSteps(matrix);
  return steps[steps.length - 1].data.answer;
};

describe("maxSquareSteps", () => {
  it("computes the maximal square area", () => {
    expect(solve([[1, 0, 1, 0, 0], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 0, 0, 1, 0]])).toBe(4);
    expect(solve([[0, 1], [1, 0]])).toBe(1);
    expect(solve([[0]])).toBe(0);
    expect(solve([[1, 1], [1, 1]])).toBe(4);
    expect(solve([[1, 1, 1], [1, 1, 1], [1, 1, 1]])).toBe(9);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxSquareSteps([[1, 0, 1], [1, 1, 1], [1, 1, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
