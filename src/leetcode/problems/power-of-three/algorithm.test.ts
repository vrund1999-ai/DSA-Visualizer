import { describe, it, expect } from "vitest";
import { powerOfThreeSteps } from "./algorithm";
import { CODE } from "./code";

const isPow3 = (n: number) => {
  const steps = powerOfThreeSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("powerOfThreeSteps", () => {
  it("detects powers of three", () => {
    expect(isPow3(27)).toBe(true);
    expect(isPow3(1)).toBe(true);
    expect(isPow3(0)).toBe(false);
    expect(isPow3(45)).toBe(false);
    expect(isPow3(9)).toBe(true);
    expect(isPow3(-3)).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of powerOfThreeSteps(45)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
