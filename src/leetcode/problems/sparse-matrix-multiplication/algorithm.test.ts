import { describe, it, expect } from "vitest";
import { sparseMulSteps } from "./algorithm";
import { CODE } from "./code";

const multiply = (A: number[][], B: number[][]) => {
  const steps = sparseMulSteps(A, B);
  return steps[steps.length - 1].data.C;
};

describe("sparseMulSteps", () => {
  it("multiplies matrices", () => {
    expect(multiply([[1, 0, 0], [-1, 0, 3]], [[7, 0, 0], [0, 0, 0], [0, 0, 1]])).toEqual([
      [7, 0, 0],
      [-7, 0, 3],
    ]);
    expect(multiply([[1, 2], [3, 4]], [[5, 6], [7, 8]])).toEqual([
      [19, 22],
      [43, 50],
    ]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of sparseMulSteps([[1, 0], [0, 1]], [[1, 2], [3, 4]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
