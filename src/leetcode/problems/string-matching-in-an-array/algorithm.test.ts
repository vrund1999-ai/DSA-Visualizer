import { describe, it, expect } from "vitest";
import { stringMatchSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (words: string[]) => {
  const steps = stringMatchSteps(words);
  return new Set(steps[steps.length - 1].data.answer);
};

describe("stringMatchSteps", () => {
  it("finds substring words", () => {
    expect(solve(["mass", "as", "hero", "superhero"])).toEqual(new Set(["as", "hero"]));
    expect(solve(["leetcode", "et", "code"])).toEqual(new Set(["et", "code"]));
    expect(solve(["blue", "green", "bu"])).toEqual(new Set([]));
    expect(solve(["a", "aa", "aaa"])).toEqual(new Set(["a", "aa"]));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of stringMatchSteps(["mass", "as", "hero", "superhero"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
