import { describe, it, expect } from "vitest";
import { findDiffSteps } from "./algorithm";
import { CODE } from "./code";

const findDiff = (s: string, t: string) => {
  const steps = findDiffSteps(s, t);
  return steps[steps.length - 1].data.answer;
};

describe("findDiffSteps", () => {
  it("finds the added character", () => {
    expect(findDiff("abcd", "abcde")).toBe("e");
    expect(findDiff("", "y")).toBe("y");
    expect(findDiff("a", "aa")).toBe("a");
    expect(findDiff("ae", "aea")).toBe("a");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of findDiffSteps("abcd", "abcde")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
