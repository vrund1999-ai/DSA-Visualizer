import { describe, it, expect } from "vitest";
import { divideSteps } from "./algorithm";
import { CODE } from "./code";

const divide = (a: number, b: number) => {
  const steps = divideSteps(a, b);
  return steps[steps.length - 1].data.answer;
};

describe("divideSteps", () => {
  it("divides truncating toward zero", () => {
    expect(divide(10, 3)).toBe(3);
    expect(divide(7, -3)).toBe(-2);
    expect(divide(93, 7)).toBe(13);
    expect(divide(-2147483648, -1)).toBe(2147483648); // pre-clamp value
    expect(divide(0, 5)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of divideSteps(93, 7)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
