import { describe, it, expect } from "vitest";
import { monotonicSteps } from "./algorithm";
import { CODE } from "./code";

const longest = (nums: number[]) => {
  const steps = monotonicSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("monotonicSteps", () => {
  it("finds the longest monotonic subarray", () => {
    expect(longest([1, 4, 3, 3, 2])).toBe(2);
    expect(longest([3, 3, 3, 3])).toBe(1);
    expect(longest([3, 2, 1])).toBe(3);
    expect(longest([1, 2, 3, 4])).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of monotonicSteps([1, 4, 3, 3, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
