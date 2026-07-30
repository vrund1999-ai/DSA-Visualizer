import { describe, it, expect } from "vitest";
import { alienSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (words: string[], order: string) => {
  const steps = alienSteps(words, order);
  return steps[steps.length - 1].data.answer;
};

describe("alienSteps", () => {
  it("verifies alien-dictionary ordering", () => {
    expect(solve(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")).toBe(true);
    expect(solve(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")).toBe(false);
    expect(solve(["apple", "app"], "abcdefghijklmnopqrstuvwxyz")).toBe(false);
    expect(solve(["app", "apple"], "abcdefghijklmnopqrstuvwxyz")).toBe(true);
    expect(solve(["single"], "abcdefghijklmnopqrstuvwxyz")).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of alienSteps(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
