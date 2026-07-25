import { describe, it, expect } from "vitest";
import { perfectSteps } from "./algorithm";
import { CODE } from "./code";

const isPerfect = (num: number) => {
  const steps = perfectSteps(num);
  return steps[steps.length - 1].data.answer;
};

describe("perfectSteps", () => {
  it("detects perfect numbers", () => {
    expect(isPerfect(28)).toBe(true);
    expect(isPerfect(6)).toBe(true);
    expect(isPerfect(496)).toBe(true);
    expect(isPerfect(7)).toBe(false);
    expect(isPerfect(1)).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of perfectSteps(28)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
