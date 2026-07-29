import { describe, it, expect } from "vitest";
import { leftRightSteps } from "./algorithm";
import { CODE } from "./code";

const leftRight = (nums: number[]) => {
  const steps = leftRightSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("leftRightSteps", () => {
  it("computes absolute left/right sum differences", () => {
    expect(leftRight([10, 4, 8, 3])).toEqual([15, 1, 11, 22]);
    expect(leftRight([1])).toEqual([0]);
    expect(leftRight([1, 2, 3])).toEqual([5, 2, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of leftRightSteps([10, 4, 8, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
