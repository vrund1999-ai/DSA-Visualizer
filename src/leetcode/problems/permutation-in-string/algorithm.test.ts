import { describe, it, expect } from "vitest";
import { permStringSteps } from "./algorithm";
import { CODE } from "./code";

const check = (s1: string, s2: string) => {
  const steps = permStringSteps(s1, s2);
  return steps[steps.length - 1].data.answer;
};

describe("permStringSteps", () => {
  it("detects a permutation substring", () => {
    expect(check("ab", "eidbaooo")).toBe(true);
    expect(check("ab", "eidboaoo")).toBe(false);
    expect(check("adc", "dcda")).toBe(true);
    expect(check("abc", "ab")).toBe(false);
    expect(check("a", "a")).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of permStringSteps("ab", "eidbaooo")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
