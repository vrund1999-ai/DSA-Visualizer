import { describe, it, expect } from "vitest";
import { subsetsIISteps } from "./algorithm";
import { CODE } from "./code";

const subsets = (nums: number[]) => {
  const steps = subsetsIISteps(nums);
  return steps[steps.length - 1].data.results;
};

describe("subsetsIISteps", () => {
  it("generates unique subsets with duplicates present", () => {
    expect(subsets([1, 2, 2])).toEqual([
      [],
      [1],
      [1, 2],
      [1, 2, 2],
      [2],
      [2, 2],
    ]);
  });

  it("has no duplicate subsets", () => {
    const res = subsets([2, 2, 2]);
    expect(res).toEqual([[], [2], [2, 2], [2, 2, 2]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of subsetsIISteps([1, 2, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
