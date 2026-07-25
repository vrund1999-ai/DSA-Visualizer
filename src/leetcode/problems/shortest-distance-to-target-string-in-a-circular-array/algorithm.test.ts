import { describe, it, expect } from "vitest";
import { circularDistSteps } from "./algorithm";
import { CODE } from "./code";

const closest = (words: string[], target: string, start: number) => {
  const steps = circularDistSteps(words, target, start);
  return steps[steps.length - 1].data.answer;
};

describe("circularDistSteps", () => {
  it("computes shortest circular distance", () => {
    expect(closest(["hello", "i", "am", "leetcode", "hello"], "hello", 1)).toBe(1);
    expect(closest(["a", "b", "leetcode"], "leetcode", 0)).toBe(1);
    expect(closest(["i", "eat", "leetcode"], "ate", 0)).toBe(-1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of circularDistSteps(["hello", "i", "am", "leetcode", "hello"], "hello", 1)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
