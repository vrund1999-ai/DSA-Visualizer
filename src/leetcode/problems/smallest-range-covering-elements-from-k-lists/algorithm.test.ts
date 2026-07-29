import { describe, it, expect } from "vitest";
import { rangeSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (lists: number[][]) => {
  const steps = rangeSteps(lists);
  return steps[steps.length - 1].data.answer;
};

describe("rangeSteps", () => {
  it("finds the smallest covering range", () => {
    expect(solve([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]])).toEqual([20, 24]);
    expect(solve([[1, 2, 3], [1, 2, 3], [1, 2, 3]])).toEqual([1, 1]);
    expect(solve([[10, 10], [11, 11]])).toEqual([10, 11]);
    expect(solve([[1], [2], [3]])).toEqual([1, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rangeSteps([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
