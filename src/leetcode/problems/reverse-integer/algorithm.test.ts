import { describe, it, expect } from "vitest";
import { reverseIntSteps } from "./algorithm";
import { CODE } from "./code";

const rev = (x: number) => {
  const steps = reverseIntSteps(x);
  const last = steps[steps.length - 1].data;
  return last.overflow ? 0 : last.sign * last.res;
};

describe("reverseIntSteps", () => {
  it("reverses positive and negative integers", () => {
    expect(rev(123)).toBe(321);
    expect(rev(-123)).toBe(-321);
    expect(rev(120)).toBe(21);
  });

  it("returns 0 on 32-bit overflow", () => {
    expect(rev(1534236469)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of reverseIntSteps(123)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
