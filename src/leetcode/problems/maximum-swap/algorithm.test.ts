import { describe, it, expect } from "vitest";
import { maxSwapSteps } from "./algorithm";
import { CODE } from "./code";

const maxSwap = (num: number) => {
  const steps = maxSwapSteps(num);
  return steps[steps.length - 1].data.answer;
};

describe("maxSwapSteps", () => {
  it("maximizes with a single swap", () => {
    expect(maxSwap(2736)).toBe(7236);
    expect(maxSwap(9973)).toBe(9973);
    expect(maxSwap(98368)).toBe(98863);
    expect(maxSwap(1993)).toBe(9913);
    expect(maxSwap(5)).toBe(5);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxSwapSteps(2736)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
