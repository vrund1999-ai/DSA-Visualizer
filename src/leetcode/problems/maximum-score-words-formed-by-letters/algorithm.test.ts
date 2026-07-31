import { describe, it, expect } from "vitest";
import { maxScoreWordsSteps } from "./algorithm";
import { CODE } from "./code";

const A = [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const solve = (words: string[], letters: string[], score: number[]) => {
  const steps = maxScoreWordsSteps(words, letters, score);
  return steps[steps.length - 1].data.answer;
};

describe("maxScoreWordsSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve(["dog", "cat", "dad", "good"], ["a", "a", "c", "d", "d", "d", "g", "o", "o"], A)).toBe(23);
    expect(
      solve(
        ["xxxz", "ax", "bx", "cx"],
        ["z", "a", "b", "c", "x", "x", "x"],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 10],
      ),
    ).toBe(24); // ax+bx+cx = 24 beats xxxz = 22

  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxScoreWordsSteps(["dog", "cat"], ["a", "c", "d", "g", "o", "t"], A)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
