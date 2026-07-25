import { describe, it, expect } from "vitest";
import { evenDigitsSteps } from "./algorithm";
import { CODE } from "./code";

const count = (nums: number[]) => {
  const steps = evenDigitsSteps(nums);
  return steps[steps.length - 1].data.answer;
};

describe("evenDigitsSteps", () => {
  it("counts even-digit numbers", () => {
    expect(count([12, 345, 2, 6, 7896])).toBe(2);
    expect(count([555, 901, 482, 1771])).toBe(1);
    expect(count([1, 22, 333])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of evenDigitsSteps([12, 345, 2, 6, 7896])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
