import { describe, it, expect } from "vitest";
import { countSmallerSteps } from "./algorithm";
import { CODE } from "./code";

const counts = (nums: number[]) => {
  const steps = countSmallerSteps(nums);
  return steps[steps.length - 1].data.res;
};

describe("countSmallerSteps", () => {
  it("counts smaller numbers after self", () => {
    expect(counts([5, 2, 6, 1])).toEqual([2, 1, 1, 0]);
    expect(counts([-1])).toEqual([0]);
    expect(counts([-1, -1])).toEqual([0, 0]);
    expect(counts([2, 0, 1])).toEqual([2, 0, 0]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of countSmallerSteps([5, 2, 6, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
