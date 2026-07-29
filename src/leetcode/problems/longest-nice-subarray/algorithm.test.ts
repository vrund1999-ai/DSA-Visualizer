import { describe, it, expect } from "vitest";
import { niceSubarraySteps } from "./algorithm";
import { CODE } from "./code";

const nice = (nums: number[]) => {
  const steps = niceSubarraySteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("niceSubarraySteps", () => {
  it("finds the longest bitwise-disjoint subarray", () => {
    expect(nice([1, 3, 8, 48, 10])).toBe(3);
    expect(nice([3, 1, 5, 11, 13])).toBe(1);
    expect(nice([1, 2, 4, 8])).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of niceSubarraySteps([1, 3, 8, 48, 10])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
