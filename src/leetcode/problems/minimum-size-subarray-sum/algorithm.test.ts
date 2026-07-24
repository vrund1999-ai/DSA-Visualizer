import { describe, it, expect } from "vitest";
import { minSubarraySteps } from "./algorithm";
import { CODE } from "./code";

const minLen = (target: number, nums: number[]) => {
  const steps = minSubarraySteps({ target, nums });
  return steps[steps.length - 1].data.best;
};

describe("minSubarraySteps", () => {
  it("finds the shortest qualifying window", () => {
    expect(minLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
    expect(minLen(4, [1, 4, 4])).toBe(1);
    expect(minLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of minSubarraySteps({ target: 7, nums: [2, 3, 1, 2, 4, 3] })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
