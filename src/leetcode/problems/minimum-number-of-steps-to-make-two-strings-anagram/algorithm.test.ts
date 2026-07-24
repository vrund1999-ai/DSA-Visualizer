import { describe, it, expect } from "vitest";
import { minStepsSteps } from "./algorithm";
import { CODE } from "./code";

const minSteps = (s: string, t: string) => {
  const steps = minStepsSteps(s, t);
  return steps[steps.length - 1].data.answer;
};

describe("minStepsSteps", () => {
  it("counts required replacements", () => {
    expect(minSteps("bab", "aba")).toBe(1);
    expect(minSteps("leetcode", "practice")).toBe(5);
    expect(minSteps("anagram", "mangaar")).toBe(0);
    expect(minSteps("xxyyzz", "xxyyzz")).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of minStepsSteps("leetcode", "practice")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
