import { describe, it, expect } from "vitest";
import { matchSubseqSteps } from "./algorithm";
import { CODE } from "./code";

const count = (s: string, words: string[]) => {
  const steps = matchSubseqSteps(s, words);
  return steps[steps.length - 1].data.answer;
};

describe("matchSubseqSteps", () => {
  it("counts words that are subsequences of s", () => {
    expect(count("abcde", ["a", "bb", "acd", "ace"])).toBe(3);
    expect(count("dsahjpjauf", ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowe"])).toBe(2);
    expect(count("abc", ["abc", "abcd"])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of matchSubseqSteps("abcde", ["a", "bb", "acd", "ace"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
