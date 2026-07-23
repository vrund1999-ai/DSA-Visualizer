import { describe, it, expect } from "vitest";
import { disappearedSteps } from "./algorithm";
import { CODE } from "./code";

const missing = (nums: number[]) => {
  const steps = disappearedSteps(nums);
  return steps[steps.length - 1].data.result;
};

describe("disappearedSteps", () => {
  it("finds missing numbers", () => {
    expect(missing([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
    expect(missing([1, 1])).toEqual([2]);
  });

  it("returns empty when all present", () => {
    expect(missing([1, 2, 3])).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of disappearedSteps([4, 3, 2, 7, 8, 2, 3, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
