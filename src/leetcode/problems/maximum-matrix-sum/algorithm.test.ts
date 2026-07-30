import { describe, it, expect } from "vitest";
import { matrixSumSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (matrix: number[][]) => {
  const steps = matrixSumSteps(matrix);
  return steps[steps.length - 1].data.answer;
};

describe("matrixSumSteps", () => {
  it("computes the maximum matrix sum", () => {
    expect(solve([[1, -1], [-1, 1]])).toBe(4);
    expect(solve([[1, 2, 3], [-1, -2, -3], [1, 2, 3]])).toBe(16);
    expect(solve([[-1]])).toBe(-1);
    expect(solve([[2, -3], [0, -1]])).toBe(6);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of matrixSumSteps([[1, 2, 3], [-1, -2, -3], [1, 2, 3]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
