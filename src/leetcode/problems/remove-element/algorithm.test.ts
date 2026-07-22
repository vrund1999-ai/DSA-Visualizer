import { describe, it, expect } from "vitest";
import { removeElementSteps } from "./algorithm";
import { CODE } from "./code";

const remove = (nums: number[], val: number) => {
  const steps = removeElementSteps({ nums, val });
  const last = steps[steps.length - 1].data;
  return last.nums.slice(0, last.k);
};

describe("removeElementSteps", () => {
  it("removes all occurrences", () => {
    expect(remove([3, 2, 2, 3], 3)).toEqual([2, 2]);
    expect(remove([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual([0, 1, 3, 0, 4]);
  });

  it("handles no matches and all matches", () => {
    expect(remove([1, 2, 3], 9)).toEqual([1, 2, 3]);
    expect(remove([5, 5, 5], 5)).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of removeElementSteps({ nums: [3, 2, 2, 3], val: 3 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
