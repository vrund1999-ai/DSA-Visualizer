import { describe, it, expect } from "vitest";
import { diagonalSteps } from "./algorithm";
import { CODE } from "./code";

const order = (mat: number[][]) => {
  const steps = diagonalSteps(mat);
  return steps[steps.length - 1].data.order;
};

describe("diagonalSteps", () => {
  it("returns elements in diagonal order", () => {
    expect(order([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9]);
    expect(order([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
    expect(order([[1, 2, 3]])).toEqual([1, 2, 3]);
    expect(order([[1], [2], [3]])).toEqual([1, 2, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of diagonalSteps([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
