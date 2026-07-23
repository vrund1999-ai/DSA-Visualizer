import { describe, it, expect } from "vitest";
import { thirdMaxSteps } from "./algorithm";
import { CODE } from "./code";

const thirdMax = (nums: number[]) => {
  const steps = thirdMaxSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("thirdMaxSteps", () => {
  it("returns the third distinct maximum", () => {
    expect(thirdMax([3, 2, 1])).toBe(1);
    expect(thirdMax([2, 2, 3, 1])).toBe(1);
    expect(thirdMax([1, 2, 2, 5, 3, 5])).toBe(2);
  });

  it("returns the max when fewer than 3 distinct", () => {
    expect(thirdMax([1, 2])).toBe(2);
    expect(thirdMax([1, 1, 1])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of thirdMaxSteps([2, 2, 3, 1])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
