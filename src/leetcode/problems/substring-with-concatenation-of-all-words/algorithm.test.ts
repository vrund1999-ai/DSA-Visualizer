import { describe, it, expect } from "vitest";
import { concatWordsSteps } from "./algorithm";
import { CODE } from "./code";

const find = (s: string, words: string[]) => {
  const steps = concatWordsSteps(s, words);
  return steps[steps.length - 1].data.results.sort((a, b) => a - b);
};

describe("concatWordsSteps", () => {
  it("finds all concatenation start indices", () => {
    expect(find("barfoothefoobarman", ["foo", "bar"])).toEqual([0, 9]);
    expect(find("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])).toEqual([]);
    expect(find("barfoofoobarthefoobarman", ["bar", "foo", "the"])).toEqual([6, 9, 12]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of concatWordsSteps("barfoothefoobarman", ["foo", "bar"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
