import { describe, it, expect } from "vitest";
import { findAnagramsSteps } from "./algorithm";
import { CODE } from "./code";

const anagrams = (s: string, p: string) => {
  const steps = findAnagramsSteps({ s, p });
  return steps[steps.length - 1].data.matches;
};

describe("findAnagramsSteps", () => {
  it("finds all anagram start indices", () => {
    expect(anagrams("cbaebabacd", "abc")).toEqual([0, 6]);
    expect(anagrams("abab", "ab")).toEqual([0, 1, 2]);
  });

  it("returns nothing when there are no anagrams", () => {
    expect(anagrams("abcdef", "xyz")).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of findAnagramsSteps({ s: "cbaebabacd", p: "abc" })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
