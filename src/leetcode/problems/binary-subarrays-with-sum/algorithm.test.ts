import { describe, it, expect } from "vitest";
import { binarySubarraySteps } from "./algorithm";
import { CODE } from "./code";

const count = (nums: number[], goal: number) => {
  const steps = binarySubarraySteps(nums, goal);
  return steps[steps.length - 1].data.answer;
};

describe("binarySubarraySteps", () => {
  it("counts subarrays with the target sum", () => {
    expect(count([1, 0, 1, 0, 1], 2)).toBe(4);
    expect(count([0, 0, 0, 0, 0], 0)).toBe(15);
    expect(count([1, 1, 1], 2)).toBe(2);
    expect(count([0, 0, 1], 0)).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of binarySubarraySteps([1, 0, 1, 0, 1], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
