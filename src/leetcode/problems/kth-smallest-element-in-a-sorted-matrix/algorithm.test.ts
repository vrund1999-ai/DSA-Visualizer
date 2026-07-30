import { describe, it, expect } from "vitest";
import { kthMatrixSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (matrix: number[][], k: number) => {
  const steps = kthMatrixSteps(matrix, k);
  return steps[steps.length - 1].data.answer;
};

const brute = (matrix: number[][], k: number) => matrix.flat().sort((a, b) => a - b)[k - 1];

describe("kthMatrixSteps", () => {
  it("finds the kth smallest via value binary search", () => {
    const m = [[1, 5, 9], [10, 11, 13], [12, 13, 15]];
    expect(solve(m, 8)).toBe(13);
    for (let k = 1; k <= 9; k++) expect(solve(m, k)).toBe(brute(m, k));
    expect(solve([[-5]], 1)).toBe(-5);
    expect(solve([[1, 2], [1, 3]], 2)).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kthMatrixSteps([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
