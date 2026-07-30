import { describe, it, expect } from "vitest";
import { printerSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string) => {
  const steps = printerSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("printerSteps", () => {
  it("computes the minimum print turns", () => {
    expect(solve("aaabbb")).toBe(2);
    expect(solve("aba")).toBe(2);
    expect(solve("abcba")).toBe(3);
    expect(solve("a")).toBe(1);
    expect(solve("abc")).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of printerSteps("abcba")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
