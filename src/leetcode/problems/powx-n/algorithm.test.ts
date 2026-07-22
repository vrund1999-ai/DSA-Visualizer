import { describe, it, expect } from "vitest";
import { powSteps } from "./algorithm";
import { CODE } from "./code";

const pow = (x: number, n: number) => {
  const steps = powSteps({ x, n });
  return steps[steps.length - 1].data.result;
};

describe("powSteps", () => {
  it("computes integer powers", () => {
    expect(pow(2, 10)).toBe(1024);
    expect(pow(2, 0)).toBe(1);
    expect(pow(3, 4)).toBe(81);
  });

  it("handles negative exponents", () => {
    expect(pow(2, -2)).toBeCloseTo(0.25, 6);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of powSteps({ x: 2, n: 10 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
