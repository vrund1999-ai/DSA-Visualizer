import { describe, it, expect } from "vitest";
import { setZeroesSteps } from "./algorithm";
import { CODE } from "./code";

const setZeroes = (m: number[][]) => {
  const steps = setZeroesSteps(m);
  return steps[steps.length - 1].data.matrix;
};

describe("setZeroesSteps", () => {
  it("zeroes rows and columns of each zero", () => {
    expect(
      setZeroes([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ]),
    ).toEqual([
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ]);
  });

  it("handles multiple zeros", () => {
    expect(
      setZeroes([
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5],
      ]),
    ).toEqual([
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of setZeroesSteps([[1, 0], [1, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
