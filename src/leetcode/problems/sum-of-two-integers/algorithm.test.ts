import { describe, it, expect } from "vitest";
import { sumBitsSteps } from "./algorithm";
import { CODE } from "./code";

const getSum = (a: number, b: number) => {
  const steps = sumBitsSteps(a, b);
  return steps[steps.length - 1].data.answer;
};

describe("sumBitsSteps", () => {
  it("adds using bit operations", () => {
    expect(getSum(1, 2)).toBe(3);
    expect(getSum(11, 6)).toBe(17);
    expect(getSum(0, 0)).toBe(0);
    expect(getSum(5, 0)).toBe(5);
    expect(getSum(20, 30)).toBe(50);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of sumBitsSteps(11, 6)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
