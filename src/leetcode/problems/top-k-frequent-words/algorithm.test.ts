import { describe, it, expect } from "vitest";
import { topKWordsSteps } from "./algorithm";
import { CODE } from "./code";

const topK = (words: string[], k: number) => {
  const steps = topKWordsSteps(words, k);
  return steps[steps.length - 1].data.answer;
};

describe("topKWordsSteps", () => {
  it("returns the k most frequent words with tie-break", () => {
    expect(topK(["i", "love", "leetcode", "i", "love", "coding"], 2)).toEqual(["i", "love"]);
    expect(topK(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4))
      .toEqual(["the", "is", "sunny", "day"]);
    expect(topK(["a", "b", "c"], 2)).toEqual(["a", "b"]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of topKWordsSteps(["i", "love", "leetcode", "i", "love", "coding"], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
