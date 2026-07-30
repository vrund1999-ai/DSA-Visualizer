import { describe, it, expect } from "vitest";
import { divideSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (nums: number[], k: number) => {
  const steps = divideSteps(nums, k);
  return steps[steps.length - 1].data.answer!;
};

describe("divideSteps", () => {
  it("divides into valid triples or returns empty", () => {
    expect(solve([1, 3, 4, 8, 7, 9, 3, 5, 1], 2)).toEqual([[1, 1, 3], [3, 4, 5], [7, 8, 9]]);
    expect(solve([2, 4, 2, 2, 5, 2], 2)).toEqual([]);
    expect(solve([4, 2, 9, 8, 2, 12, 7, 12, 10, 5, 8, 5, 5, 7, 9, 2, 5, 11], 14)).toHaveLength(6);
    expect(solve([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of divideSteps([1, 3, 4, 8, 7, 9, 3, 5, 1], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
