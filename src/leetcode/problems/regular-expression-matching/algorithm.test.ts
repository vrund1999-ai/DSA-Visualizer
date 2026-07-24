import { describe, it, expect } from "vitest";
import { regexSteps } from "./algorithm";
import { CODE } from "./code";

const isMatch = (s: string, p: string) => {
  const steps = regexSteps(s, p);
  return steps[steps.length - 1].data.answer;
};

describe("regexSteps", () => {
  it("matches with . and *", () => {
    expect(isMatch("aa", "a")).toBe(false);
    expect(isMatch("aa", "a*")).toBe(true);
    expect(isMatch("ab", ".*")).toBe(true);
    expect(isMatch("aab", "c*a*b")).toBe(true);
    expect(isMatch("mississippi", "mis*is*p*.")).toBe(false);
    expect(isMatch("", "")).toBe(true);
    expect(isMatch("", "a*")).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of regexSteps("aab", "c*a*b")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
