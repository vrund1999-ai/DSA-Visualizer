import { describe, it, expect } from "vitest";
import { hiddenSteps } from "./algorithm";
import { CODE } from "./code";

const count = (differences: number[], lower: number, upper: number) => {
  const steps = hiddenSteps(differences, lower, upper);
  return steps[steps.length - 1].data.answer;
};

describe("hiddenSteps", () => {
  it("counts consistent hidden sequences", () => {
    expect(count([1, -3, 4], 1, 6)).toBe(2);
    expect(count([3, -4, 5, 1, -2], -4, 5)).toBe(4);
    expect(count([4, -7, 2], 3, 6)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of hiddenSteps([1, -3, 4], 1, 6)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
