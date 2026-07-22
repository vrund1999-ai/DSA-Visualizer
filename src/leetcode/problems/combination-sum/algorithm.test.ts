import { describe, it, expect } from "vitest";
import { combinationSumSteps } from "./algorithm";
import { CODE } from "./code";

const combos = (candidates: number[], target: number) => {
  const steps = combinationSumSteps({ candidates, target });
  return steps[steps.length - 1].data.results;
};

describe("combinationSumSteps", () => {
  it("finds all combinations summing to the target", () => {
    expect(combos([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
    expect(combos([2, 3, 5], 8)).toEqual([[2, 2, 2, 2], [2, 3, 3], [3, 5]]);
  });

  it("returns nothing when the target can't be formed", () => {
    expect(combos([2], 1)).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of combinationSumSteps({ candidates: [2, 3, 6, 7], target: 7 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
