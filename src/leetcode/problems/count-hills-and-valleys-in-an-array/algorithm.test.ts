import { describe, it, expect } from "vitest";
import { hillValleySteps } from "./algorithm";
import { CODE } from "./code";

const count = (nums: number[]) => {
  const steps = hillValleySteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("hillValleySteps", () => {
  it("counts hills and valleys, ignoring plateaus", () => {
    expect(count([2, 4, 1, 1, 6, 5])).toBe(3);
    expect(count([6, 6, 5, 5, 4, 1])).toBe(0);
    expect(count([1, 2, 3, 4])).toBe(0);
    expect(count([9, 8, 8, 7, 9])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of hillValleySteps([2, 4, 1, 1, 6, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
