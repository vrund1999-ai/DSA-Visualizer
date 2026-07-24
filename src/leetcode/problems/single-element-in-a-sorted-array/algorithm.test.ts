import { describe, it, expect } from "vitest";
import { singleElementSteps } from "./algorithm";
import { CODE } from "./code";

const single = (nums: number[]) => {
  const steps = singleElementSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("singleElementSteps", () => {
  it("finds the single element", () => {
    expect(single([1, 1, 2, 3, 3, 4, 4, 8, 8])).toBe(2);
    expect(single([3, 3, 7, 7, 10, 11, 11])).toBe(10);
    expect(single([1])).toBe(1);
    expect(single([1, 1, 2])).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of singleElementSteps([1, 1, 2, 3, 3, 4, 4, 8, 8])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
