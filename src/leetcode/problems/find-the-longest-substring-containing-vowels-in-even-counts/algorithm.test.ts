import { describe, it, expect } from "vitest";
import { vowelMaskSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string) => {
  const steps = vowelMaskSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("vowelMaskSteps", () => {
  it("finds the longest all-even-vowel substring", () => {
    expect(solve("eleetminicoworoep")).toBe(13);
    expect(solve("leetcodeisgreat")).toBe(5);
    expect(solve("bcbcbc")).toBe(6);
    expect(solve("a")).toBe(0);
    expect(solve("")).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of vowelMaskSteps("eleetminicoworoep")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
