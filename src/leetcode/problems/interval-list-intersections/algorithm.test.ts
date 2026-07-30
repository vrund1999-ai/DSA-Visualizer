import { describe, it, expect } from "vitest";
import { intersectionSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (A: number[][], B: number[][]) => {
  const steps = intersectionSteps(A, B);
  return steps[steps.length - 1].data.answer;
};

describe("intersectionSteps", () => {
  it("computes interval intersections", () => {
    expect(solve([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]])).toEqual([
      [1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25],
    ]);
    expect(solve([[1, 3], [5, 9]], [])).toEqual([]);
    expect(solve([[1, 7]], [[3, 10]])).toEqual([[3, 7]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of intersectionSteps([[0, 2], [5, 10]], [[1, 5], [8, 12]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
