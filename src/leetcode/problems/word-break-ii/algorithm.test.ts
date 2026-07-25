import { describe, it, expect } from "vitest";
import { wordBreakIISteps } from "./algorithm";
import { CODE } from "./code";

const sentences = (s: string, dict: string[]) => {
  const steps = wordBreakIISteps(s, dict);
  return steps[steps.length - 1].data.results.sort();
};

describe("wordBreakIISteps", () => {
  it("enumerates all valid segmentations", () => {
    expect(sentences("catsanddog", ["cat", "cats", "and", "sand", "dog"])).toEqual([
      "cat sand dog",
      "cats and dog",
    ]);
    expect(sentences("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"])).toEqual([
      "pine apple pen apple",
      "pine applepen apple",
      "pineapple pen apple",
    ]);
    expect(sentences("catsandog", ["cats", "dog", "sand", "and", "cat"])).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of wordBreakIISteps("catsanddog", ["cat", "cats", "and", "sand", "dog"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
