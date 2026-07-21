import { describe, it, expect } from "vitest";
import { anagramSteps } from "./algorithm";
import { CODE } from "./code";

const isAnagram = (s: string, t: string) => {
  const steps = anagramSteps(s, t);
  return steps[steps.length - 1].data.result;
};

describe("anagramSteps", () => {
  it("accepts anagrams", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
    expect(isAnagram("", "")).toBe(true);
  });

  it("rejects non-anagrams and length mismatches", () => {
    expect(isAnagram("rat", "car")).toBe(false);
    expect(isAnagram("a", "ab")).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of anagramSteps("anagram", "nagaram")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
