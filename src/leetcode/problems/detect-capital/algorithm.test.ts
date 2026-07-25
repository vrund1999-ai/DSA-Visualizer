import { describe, it, expect } from "vitest";
import { detectCapitalSteps } from "./algorithm";
import { CODE } from "./code";

const detect = (word: string) => {
  const steps = detectCapitalSteps(word);
  return steps[steps.length - 1].data.answer;
};

describe("detectCapitalSteps", () => {
  it("validates capitalization patterns", () => {
    expect(detect("USA")).toBe(true);
    expect(detect("leetcode")).toBe(true);
    expect(detect("Google")).toBe(true);
    expect(detect("FlaG")).toBe(false);
    expect(detect("mL")).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of detectCapitalSteps("Google")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
