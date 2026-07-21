import { describe, it, expect } from "vitest";
import { palindromeSteps } from "./algorithm";
import { CODE } from "./code";

const longest = (s: string) => {
  const steps = palindromeSteps(s);
  const { chars, bestStart, bestEnd } = steps[steps.length - 1].data;
  return chars.slice(bestStart, bestEnd + 1).join("");
};

describe("palindromeSteps", () => {
  it("finds a longest palindromic substring", () => {
    expect(["bab", "aba"]).toContain(longest("babad"));
    expect(longest("cbbd")).toBe("bb");
    expect(longest("a")).toBe("a");
  });

  it("handles a fully palindromic string", () => {
    expect(longest("aaaa")).toBe("aaaa");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of palindromeSteps("babad")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
