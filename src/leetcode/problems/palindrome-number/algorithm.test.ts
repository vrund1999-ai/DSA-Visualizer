import { describe, it, expect } from "vitest";
import { palinNumSteps } from "./algorithm";
import { CODE } from "./code";

const isPal = (x: number) => {
  const steps = palinNumSteps(x);
  return steps[steps.length - 1].data.result;
};

describe("palinNumSteps", () => {
  it("recognizes palindrome numbers", () => {
    expect(isPal(121)).toBe(true);
    expect(isPal(12321)).toBe(true);
    expect(isPal(0)).toBe(true);
  });

  it("rejects non-palindromes and negatives", () => {
    expect(isPal(123)).toBe(false);
    expect(isPal(-121)).toBe(false);
    expect(isPal(10)).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of palinNumSteps(12321)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
