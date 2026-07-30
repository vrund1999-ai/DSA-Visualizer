import { describe, it, expect } from "vitest";
import { squaresSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (matrix: number[][]) => {
  const steps = squaresSteps(matrix);
  return steps[steps.length - 1].data.answer;
};

describe("squaresSteps", () => {
  it("counts all all-ones square submatrices", () => {
    expect(solve([[0, 1, 1, 1], [1, 1, 1, 1], [0, 1, 1, 1]])).toBe(15);
    expect(solve([[1, 0, 1], [1, 1, 0], [1, 1, 0]])).toBe(7);
    expect(solve([[0]])).toBe(0);
    expect(solve([[1, 1], [1, 1]])).toBe(5);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of squaresSteps([[0, 1, 1, 1], [1, 1, 1, 1], [0, 1, 1, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
