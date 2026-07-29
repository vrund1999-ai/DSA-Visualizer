import { describe, it, expect } from "vitest";
import { maxScoreSteps } from "./algorithm";
import { CODE } from "./code";

const maxScore = (cardPoints: number[], k: number) => {
  const steps = maxScoreSteps(cardPoints, k);
  return steps[steps.length - 1].data.answer;
};

describe("maxScoreSteps", () => {
  it("maximizes points from the ends", () => {
    expect(maxScore([1, 2, 3, 4, 5, 6, 1], 3)).toBe(12);
    expect(maxScore([2, 2, 2], 2)).toBe(4);
    expect(maxScore([9, 7, 7, 9, 7, 7, 9], 7)).toBe(55);
    expect(maxScore([1, 1000, 1], 1)).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxScoreSteps([1, 2, 3, 4, 5, 6, 1], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
