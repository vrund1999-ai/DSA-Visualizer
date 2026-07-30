import { describe, it, expect } from "vitest";
import { kPalinSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string, k: number) => {
  const steps = kPalinSteps(s, k);
  return steps[steps.length - 1].data.answer;
};

describe("kPalinSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve("annabelle", 2)).toBe(true);
    expect(solve("leetcode", 3)).toBe(false);
    expect(solve("true", 4)).toBe(true);
    expect(solve("yzyzyzyzyzyzyzy", 2)).toBe(true);
    expect(solve("cr", 7)).toBe(false); // k > length
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kPalinSteps("annabelle", 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
