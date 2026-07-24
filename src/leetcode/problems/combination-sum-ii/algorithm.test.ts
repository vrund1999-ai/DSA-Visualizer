import { describe, it, expect } from "vitest";
import { combinationSteps } from "./algorithm";
import { CODE } from "./code";

const combos = (candidates: number[], target: number) => {
  const steps = combinationSteps(candidates, target);
  return steps[steps.length - 1].data.results;
};

describe("combinationSteps", () => {
  it("finds unique combinations", () => {
    expect(combos([10, 1, 2, 7, 6, 1, 5], 8)).toEqual([
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6],
    ]);
    expect(combos([2, 5, 2, 1, 2], 5)).toEqual([
      [1, 2, 2],
      [5],
    ]);
    expect(combos([1], 2)).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of combinationSteps([10, 1, 2, 7, 6, 1, 5], 8)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
