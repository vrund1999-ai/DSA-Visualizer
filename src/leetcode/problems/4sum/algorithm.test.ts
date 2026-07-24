import { describe, it, expect } from "vitest";
import { fourSumSteps } from "./algorithm";
import { CODE } from "./code";

const fourSum = (nums: number[], target: number) => {
  const steps = fourSumSteps({ nums, target });
  return steps[steps.length - 1].data.quads;
};

describe("fourSumSteps", () => {
  it("finds all unique quadruplets", () => {
    expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1],
    ]);
    expect(fourSum([2, 2, 2, 2, 2], 8)).toEqual([[2, 2, 2, 2]]);
  });

  it("returns nothing when no quadruplet matches", () => {
    expect(fourSum([1, 2, 3, 4], 100)).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of fourSumSteps({ nums: [1, 0, -1, 0, -2, 2], target: 0 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
