import { describe, it, expect } from "vitest";
import { takeCharsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string, k: number) => {
  const steps = takeCharsSteps(s, k);
  return steps[steps.length - 1].data.answer;
};

describe("takeCharsSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve("aabaaaacaabc", 2)).toBe(8);
    expect(solve("a", 1)).toBe(-1);
    expect(solve("abc", 1)).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of takeCharsSteps("aabaaaacaabc", 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
