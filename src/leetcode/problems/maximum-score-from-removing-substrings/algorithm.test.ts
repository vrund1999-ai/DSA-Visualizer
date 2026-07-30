import { describe, it, expect } from "vitest";
import { removeScoreSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string, x: number, y: number) => {
  const steps = removeScoreSteps(s, x, y);
  return steps[steps.length - 1].data.answer;
};

describe("removeScoreSteps", () => {
  it("computes the maximum removal score", () => {
    expect(solve("cdbcbbaaabab", 4, 5)).toBe(19);
    expect(solve("aabbaaxybbaabb", 5, 4)).toBe(20);
    expect(solve("ab", 2, 1)).toBe(2);
    expect(solve("ba", 2, 3)).toBe(3);
    expect(solve("xyz", 1, 1)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of removeScoreSteps("cdbcbbaaabab", 4, 5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
