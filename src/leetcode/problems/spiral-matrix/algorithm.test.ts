import { describe, it, expect } from "vitest";
import { spiralSteps } from "./algorithm";
import { CODE } from "./code";

const spiral = (m: number[][]) => {
  const steps = spiralSteps(m);
  return steps[steps.length - 1].data.result;
};

describe("spiralSteps", () => {
  it("reads a rectangular matrix in spiral order", () => {
    expect(
      spiral([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ]),
    ).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });

  it("reads a square matrix in spiral order", () => {
    expect(
      spiral([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of spiralSteps([[1, 2], [3, 4]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
