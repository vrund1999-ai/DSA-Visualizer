import { describe, it, expect } from "vitest";
import { lpsSteps } from "./algorithm";
import { CODE } from "./code";

const lps = (s: string) => {
  const steps = lpsSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("lpsSteps", () => {
  it("finds the longest palindromic subsequence length", () => {
    expect(lps("bbbab")).toBe(4);
    expect(lps("cbbd")).toBe(2);
    expect(lps("a")).toBe(1);
    expect(lps("agbdba")).toBe(5);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of lpsSteps("bbbab")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
