import { describe, it, expect } from "vitest";
import { nextPermSteps } from "./algorithm";
import { CODE } from "./code";

const next = (nums: number[]) => {
  const steps = nextPermSteps(nums);
  return steps[steps.length - 1].data.nums;
};

describe("nextPermSteps", () => {
  it("produces the next permutation", () => {
    expect(next([1, 2, 3])).toEqual([1, 3, 2]);
    expect(next([1, 3, 5, 4, 2])).toEqual([1, 4, 2, 3, 5]);
  });

  it("wraps the largest permutation to the smallest", () => {
    expect(next([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it("handles a single trailing swap", () => {
    expect(next([1, 1, 5])).toEqual([1, 5, 1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of nextPermSteps([1, 3, 5, 4, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
