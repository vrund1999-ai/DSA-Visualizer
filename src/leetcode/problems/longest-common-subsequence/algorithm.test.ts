import { describe, it, expect } from "vitest";
import { lcsSteps } from "./algorithm";
import { CODE } from "./code";

const lcs = (a: string, b: string) => {
  const steps = lcsSteps(a, b);
  return steps[steps.length - 1].data.answer;
};

describe("lcsSteps", () => {
  it("computes the LCS length", () => {
    expect(lcs("abcde", "ace")).toBe(3);
    expect(lcs("abc", "abc")).toBe(3);
    expect(lcs("abc", "def")).toBe(0);
    expect(lcs("bl", "yby")).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of lcsSteps("abcde", "ace")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
