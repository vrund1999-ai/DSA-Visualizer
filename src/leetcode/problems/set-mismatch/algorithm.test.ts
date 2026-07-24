import { describe, it, expect } from "vitest";
import { setMismatchSteps } from "./algorithm";
import { CODE } from "./code";

const findError = (nums: number[]) => {
  const steps = setMismatchSteps(nums);
  const { dup, missing } = steps[steps.length - 1].data;
  return [dup, missing];
};

describe("setMismatchSteps", () => {
  it("finds the duplicate and missing values", () => {
    expect(findError([1, 2, 2, 4])).toEqual([2, 3]);
    expect(findError([1, 1])).toEqual([1, 2]);
    expect(findError([3, 2, 3, 4, 6, 5])).toEqual([3, 1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of setMismatchSteps([1, 2, 2, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
