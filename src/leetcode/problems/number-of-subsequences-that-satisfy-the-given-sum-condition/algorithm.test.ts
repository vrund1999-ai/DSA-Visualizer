import { describe, it, expect } from "vitest";
import { numSubseqSteps } from "./algorithm";
import { CODE } from "./code";

const count = (nums: number[], target: number) => {
  const steps = numSubseqSteps(nums, target);
  return steps[steps.length - 1].data.answer;
};

describe("numSubseqSteps", () => {
  it("counts subsequences whose min+max <= target", () => {
    expect(count([3, 5, 6, 7], 9)).toBe(4);
    expect(count([3, 3, 6, 8], 10)).toBe(6);
    expect(count([2, 3, 3, 4, 6, 7], 12)).toBe(61);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of numSubseqSteps([3, 5, 6, 7], 9)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
