import { describe, it, expect } from "vitest";
import { gcdStringsSteps } from "./algorithm";
import { CODE } from "./code";

const gcd = (a: string, b: string) => {
  const steps = gcdStringsSteps(a, b);
  return steps[steps.length - 1].data.answer;
};

describe("gcdStringsSteps", () => {
  it("finds the greatest common divisor string", () => {
    expect(gcd("ABCABC", "ABC")).toBe("ABC");
    expect(gcd("ABABAB", "ABAB")).toBe("AB");
    expect(gcd("LEET", "CODE")).toBe("");
    expect(gcd("ABABABAB", "ABAB")).toBe("ABAB");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of gcdStringsSteps("ABCABC", "ABC")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
