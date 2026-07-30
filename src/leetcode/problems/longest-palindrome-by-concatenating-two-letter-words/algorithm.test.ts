import { describe, it, expect } from "vitest";
import { twoLetterPalinSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (words: string[]) => {
  const steps = twoLetterPalinSteps(words);
  return steps[steps.length - 1].data.answer;
};

describe("twoLetterPalinSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve(["lc", "cl", "gg"])).toBe(6);
    expect(solve(["ab", "ty", "yt", "lc", "cl", "ab"])).toBe(8);
    expect(solve(["cc", "ll", "xx"])).toBe(2);
    expect(solve(["ab", "cd"])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of twoLetterPalinSteps(["lc", "cl", "gg"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
