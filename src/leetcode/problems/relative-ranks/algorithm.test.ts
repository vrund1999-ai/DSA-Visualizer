import { describe, it, expect } from "vitest";
import { ranksSteps } from "./algorithm";
import { CODE } from "./code";

const ranks = (score: number[]) => {
  const steps = ranksSteps(score);
  return steps[steps.length - 1].data.answer;
};

describe("ranksSteps", () => {
  it("assigns medals and placement numbers", () => {
    expect(ranks([5, 4, 3, 2, 1])).toEqual(["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]);
    expect(ranks([10, 3, 8, 9, 4])).toEqual(["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]);
    expect(ranks([1])).toEqual(["Gold Medal"]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of ranksSteps([10, 3, 8, 9, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
