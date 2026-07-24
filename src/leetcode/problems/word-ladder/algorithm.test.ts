import { describe, it, expect } from "vitest";
import { wordLadderSteps } from "./algorithm";
import { CODE } from "./code";

const ladder = (begin: string, end: string, wordList: string[]) => {
  const steps = wordLadderSteps(begin, end, wordList);
  return steps[steps.length - 1].data.answer;
};

describe("wordLadderSteps", () => {
  it("finds the shortest ladder length", () => {
    expect(ladder("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])).toBe(5);
    expect(ladder("hit", "cog", ["hot", "dot", "dog", "lot", "log"])).toBe(0);
    expect(ladder("a", "c", ["a", "b", "c"])).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of wordLadderSteps("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
