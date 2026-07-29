import { describe, it, expect } from "vitest";
import { kDiffSteps } from "./algorithm";
import { CODE } from "./code";

const kdiff = (nums: number[], k: number) => {
  const steps = kDiffSteps(nums, k);
  return steps[steps.length - 1].data.answer;
};

describe("kDiffSteps", () => {
  it("counts unique k-diff pairs", () => {
    expect(kdiff([3, 1, 4, 1, 5], 2)).toBe(2);
    expect(kdiff([1, 2, 3, 4, 5], 1)).toBe(4);
    expect(kdiff([1, 3, 1, 5, 4], 0)).toBe(1);
    expect(kdiff([1, 1, 1, 1, 1], 0)).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kDiffSteps([3, 1, 4, 1, 5], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
