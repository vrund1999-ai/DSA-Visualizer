import { describe, it, expect } from "vitest";
import { weakRowsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (mat: number[][], k: number) => {
  const steps = weakRowsSteps(mat, k);
  return steps[steps.length - 1].data.answer;
};

describe("weakRowsSteps", () => {
  it("returns the k weakest rows", () => {
    expect(solve([[1, 1, 0, 0, 0], [1, 1, 1, 1, 0], [1, 0, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 1, 1, 1]], 3)).toEqual([2, 0, 3]);
    expect(solve([[1, 0, 0, 0], [1, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0]], 2)).toEqual([0, 2]);
    expect(solve([[1], [0]], 1)).toEqual([1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of weakRowsSteps([[1, 1, 0], [1, 0, 0], [1, 1, 1]], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
