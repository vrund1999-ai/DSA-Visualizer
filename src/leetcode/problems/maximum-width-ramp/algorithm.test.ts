import { describe, it, expect } from "vitest";
import { widthRampSteps } from "./algorithm";
import { CODE } from "./code";

const maxRamp = (nums: number[]) => {
  const steps = widthRampSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("widthRampSteps", () => {
  it("finds the maximum width ramp", () => {
    expect(maxRamp([6, 0, 8, 2, 1, 5])).toBe(4);
    expect(maxRamp([9, 8, 1, 0, 1, 9, 4, 0, 4, 1])).toBe(7);
    expect(maxRamp([3, 2, 1])).toBe(0);
    expect(maxRamp([1, 2, 3])).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of widthRampSteps([6, 0, 8, 2, 1, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
