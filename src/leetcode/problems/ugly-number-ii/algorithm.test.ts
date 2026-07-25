import { describe, it, expect } from "vitest";
import { uglyIISteps } from "./algorithm";
import { CODE } from "./code";

const nthUgly = (n: number) => {
  const steps = uglyIISteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("uglyIISteps", () => {
  it("returns the nth ugly number", () => {
    expect(nthUgly(1)).toBe(1);
    expect(nthUgly(10)).toBe(12);
    expect(nthUgly(11)).toBe(15);
    expect(nthUgly(15)).toBe(24);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of uglyIISteps(10)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
