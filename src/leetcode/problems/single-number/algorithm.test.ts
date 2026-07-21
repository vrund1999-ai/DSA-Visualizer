import { describe, it, expect } from "vitest";
import { singleNumberSteps } from "./algorithm";
import { CODE } from "./code";

const single = (nums: number[]) => {
  const steps = singleNumberSteps(nums);
  return steps[steps.length - 1].data.acc;
};

describe("singleNumberSteps", () => {
  it("finds the unpaired value", () => {
    expect(single([2, 2, 1])).toBe(1);
    expect(single([4, 1, 2, 1, 2])).toBe(4);
    expect(single([7])).toBe(7);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of singleNumberSteps([4, 1, 2, 1, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
