import { describe, it, expect } from "vitest";
import { searchRangeSteps } from "./algorithm";
import { CODE } from "./code";

const range = (nums: number[], target: number) => {
  const steps = searchRangeSteps({ nums, target });
  const { first, last } = steps[steps.length - 1].data;
  return [first, last];
};

describe("searchRangeSteps", () => {
  it("finds the first and last positions", () => {
    expect(range([5, 7, 7, 8, 8, 8, 10], 8)).toEqual([3, 5]);
    expect(range([5, 7, 7, 8, 8, 10], 7)).toEqual([1, 2]);
  });

  it("returns [-1, -1] when absent", () => {
    expect(range([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
    expect(range([], 0)).toEqual([-1, -1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of searchRangeSteps({ nums: [5, 7, 7, 8, 8, 8, 10], target: 8 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
