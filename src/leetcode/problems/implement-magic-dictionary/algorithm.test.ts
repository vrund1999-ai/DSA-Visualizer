import { describe, it, expect } from "vitest";
import { magicSteps } from "./algorithm";
import { CODE } from "./code";

const search = (words: string[], word: string) => {
  const steps = magicSteps(words, word);
  return steps[steps.length - 1].data.answer;
};

describe("magicSteps", () => {
  it("matches only exactly-one-character changes", () => {
    const dict = ["hello", "leetcode"];
    expect(search(dict, "hello")).toBe(false); // zero changes
    expect(search(dict, "hhllo")).toBe(true); // one change
    expect(search(dict, "hell")).toBe(false); // length differs
    expect(search(dict, "leetcoded")).toBe(false);
    expect(search(["hello", "hallo", "leetcode"], "hell")).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of magicSteps(["hello", "leetcode", "hallo"], "hhllo")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
