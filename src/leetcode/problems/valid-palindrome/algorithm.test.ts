import { describe, it, expect } from "vitest";
import { validPalindromeSteps } from "./algorithm";
import { CODE } from "./code";

const isPal = (s: string) => {
  const steps = validPalindromeSteps(s);
  return steps[steps.length - 1].data.result;
};

describe("validPalindromeSteps", () => {
  it("ignores case and punctuation", () => {
    expect(isPal("A man, a plan, a canal: Panama")).toBe(true);
    expect(isPal(" ")).toBe(true);
    expect(isPal("0P")).toBe(false);
  });

  it("rejects non-palindromes", () => {
    expect(isPal("race a car")).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of validPalindromeSteps("A man, a plan, a canal: Panama")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
