import { describe, it, expect } from "vitest";
import { bouquetsSteps } from "./algorithm";
import { CODE } from "./code";

const minDays = (bloomDay: number[], m: number, k: number) => {
  const steps = bouquetsSteps(bloomDay, m, k);
  return steps[steps.length - 1].data.answer;
};

describe("bouquetsSteps", () => {
  it("finds the earliest feasible day", () => {
    expect(minDays([1, 10, 3, 10, 2], 3, 1)).toBe(3);
    expect(minDays([1, 10, 3, 10, 2], 3, 2)).toBe(-1);
    expect(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3)).toBe(12);
    expect(minDays([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 4, 2)).toBe(9);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of bouquetsSteps([7, 7, 7, 7, 12, 7, 7], 2, 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
