import { describe, it, expect } from "vitest";
import { palinSubseqSteps } from "./algorithm";
import { CODE } from "./code";

const count = (s: string) => {
  const steps = palinSubseqSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("palinSubseqSteps", () => {
  it("counts unique length-3 palindromic subsequences", () => {
    expect(count("aabca")).toBe(3);
    expect(count("adc")).toBe(0);
    expect(count("bbcbaba")).toBe(4);
    expect(count("aaaa")).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of palinSubseqSteps("aabca")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
