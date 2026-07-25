import { describe, it, expect } from "vitest";
import { shortestPalinSteps } from "./algorithm";
import { CODE } from "./code";

const shortest = (s: string) => {
  const steps = shortestPalinSteps(s);
  return steps[steps.length - 1].data.answer;
};

const isPalindrome = (s: string) => s === [...s].reverse().join("");

describe("shortestPalinSteps", () => {
  it("produces the shortest front-padded palindrome", () => {
    expect(shortest("aacecaaa")).toBe("aaacecaaa");
    expect(shortest("abcd")).toBe("dcbabcd");
    expect(shortest("a")).toBe("a");
    // sanity: result is a palindrome ending in s
    for (const s of ["aabba", "xyz", "aaa"]) {
      const r = shortest(s) as string;
      expect(isPalindrome(r)).toBe(true);
      expect(r.endsWith(s)).toBe(true);
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of shortestPalinSteps("aacecaaa")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
