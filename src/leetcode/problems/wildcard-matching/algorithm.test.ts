import { describe, it, expect } from "vitest";
import { wildcardSteps } from "./algorithm";
import { CODE } from "./code";

const isMatch = (s: string, p: string) => {
  const steps = wildcardSteps(s, p);
  return steps[steps.length - 1].data.answer;
};

describe("wildcardSteps", () => {
  it("matches with ? and *", () => {
    expect(isMatch("aa", "a")).toBe(false);
    expect(isMatch("aa", "*")).toBe(true);
    expect(isMatch("cb", "?a")).toBe(false);
    expect(isMatch("adceb", "*a*b")).toBe(true);
    expect(isMatch("acdcb", "a*c?b")).toBe(false);
    expect(isMatch("", "")).toBe(true);
    expect(isMatch("", "***")).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of wildcardSteps("adceb", "*a*b")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
