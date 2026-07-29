import { describe, it, expect } from "vitest";
import { maxVowelsSteps } from "./algorithm";
import { CODE } from "./code";

const maxVowels = (s: string, k: number) => {
  const steps = maxVowelsSteps(s, k);
  return steps[steps.length - 1].data.answer;
};

describe("maxVowelsSteps", () => {
  it("finds the max vowels in a length-k window", () => {
    expect(maxVowels("abciiidef", 3)).toBe(3);
    expect(maxVowels("aeiou", 2)).toBe(2);
    expect(maxVowels("leetcode", 3)).toBe(2);
    expect(maxVowels("rhythms", 4)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxVowelsSteps("abciiidef", 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
