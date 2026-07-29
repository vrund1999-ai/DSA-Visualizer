import { describe, it, expect } from "vitest";
import { consistentSteps } from "./algorithm";
import { CODE } from "./code";

const count = (allowed: string, words: string[]) => {
  const steps = consistentSteps(allowed, words);
  return steps[steps.length - 1].data.answer;
};

describe("consistentSteps", () => {
  it("counts consistent strings", () => {
    expect(count("ab", ["ad", "bd", "aaab", "baa", "badab"])).toBe(2);
    expect(count("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])).toBe(7);
    expect(count("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"])).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of consistentSteps("ab", ["ad", "bd", "aaab", "baa", "badab"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
