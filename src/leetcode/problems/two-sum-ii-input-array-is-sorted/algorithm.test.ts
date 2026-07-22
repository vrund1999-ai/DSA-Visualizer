import { describe, it, expect } from "vitest";
import { twoSumIISteps } from "./algorithm";
import { CODE } from "./code";

const twoSum = (numbers: number[], target: number) => {
  const steps = twoSumIISteps({ numbers, target });
  return steps[steps.length - 1].data.found;
};

describe("twoSumIISteps", () => {
  it("finds the 1-indexed pair", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of twoSumIISteps({ numbers: [2, 7, 11, 15], target: 9 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
