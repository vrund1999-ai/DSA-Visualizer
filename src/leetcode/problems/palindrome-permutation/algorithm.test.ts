import { describe, it, expect } from "vitest";
import { palinPermSteps } from "./algorithm";
import { CODE } from "./code";

const canPalin = (s: string) => {
  const steps = palinPermSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("palinPermSteps", () => {
  it("checks palindrome permutability", () => {
    expect(canPalin("code")).toBe(false);
    expect(canPalin("aab")).toBe(true);
    expect(canPalin("carerac")).toBe(true);
    expect(canPalin("aabbhijkkjih")).toBe(true);
    expect(canPalin("")).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of palinPermSteps("aab")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
