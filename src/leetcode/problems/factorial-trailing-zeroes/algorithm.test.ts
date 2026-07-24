import { describe, it, expect } from "vitest";
import { trailingZeroesSteps } from "./algorithm";
import { CODE } from "./code";

const zeros = (n: number) => {
  const steps = trailingZeroesSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("trailingZeroesSteps", () => {
  it("counts trailing zeros of n!", () => {
    expect(zeros(3)).toBe(0);
    expect(zeros(5)).toBe(1);
    expect(zeros(10)).toBe(2);
    expect(zeros(25)).toBe(6);
    expect(zeros(100)).toBe(24);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of trailingZeroesSteps(100)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
