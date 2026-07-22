import { describe, it, expect } from "vitest";
import { longestPalindromeSteps } from "./algorithm";
import { CODE } from "./code";

const longest = (s: string) => {
  const steps = longestPalindromeSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("longestPalindromeSteps", () => {
  it("computes the longest buildable palindrome length", () => {
    expect(longest("abccccdd")).toBe(7);
    expect(longest("a")).toBe(1);
    expect(longest("bb")).toBe(2);
    expect(longest("abc")).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of longestPalindromeSteps("abccccdd")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
