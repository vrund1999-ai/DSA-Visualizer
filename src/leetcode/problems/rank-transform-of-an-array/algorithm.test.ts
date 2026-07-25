import { describe, it, expect } from "vitest";
import { rankSteps } from "./algorithm";
import { CODE } from "./code";

const ranks = (arr: number[]) => {
  const steps = rankSteps(arr);
  return steps[steps.length - 1].data.answer;
};

describe("rankSteps", () => {
  it("assigns ranks by sorted distinct order", () => {
    expect(ranks([40, 10, 20, 30])).toEqual([4, 1, 2, 3]);
    expect(ranks([100, 100, 100])).toEqual([1, 1, 1]);
    expect(ranks([37, 12, 28, 9, 100, 56, 80, 5, 12])).toEqual([5, 3, 4, 2, 8, 6, 7, 1, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rankSteps([40, 10, 20, 30, 10])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
