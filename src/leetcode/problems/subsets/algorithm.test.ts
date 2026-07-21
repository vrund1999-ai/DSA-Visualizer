import { describe, it, expect } from "vitest";
import { subsetsSteps } from "./algorithm";
import { CODE } from "./code";

const subsets = (nums: number[]) => {
  const steps = subsetsSteps(nums);
  return steps[steps.length - 1].data.results;
};

describe("subsetsSteps", () => {
  it("generates the full power set", () => {
    const result = subsets([1, 2, 3]);
    expect(result).toHaveLength(8);
    expect(result).toEqual([
      [],
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 3],
      [2],
      [2, 3],
      [3],
    ]);
  });

  it("handles a single element", () => {
    expect(subsets([0])).toEqual([[], [0]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of subsetsSteps([1, 2, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
