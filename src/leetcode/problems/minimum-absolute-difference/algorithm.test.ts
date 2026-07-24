import { describe, it, expect } from "vitest";
import { minAbsDiffSteps } from "./algorithm";
import { CODE } from "./code";

const pairs = (arr: number[]) => {
  const steps = minAbsDiffSteps(arr);
  return steps[steps.length - 1].data.results;
};

describe("minAbsDiffSteps", () => {
  it("finds all minimum-difference pairs", () => {
    expect(pairs([4, 2, 1, 3])).toEqual([[1, 2], [2, 3], [3, 4]]);
    expect(pairs([1, 3, 6, 10, 15])).toEqual([[1, 3]]);
    expect(pairs([3, 8, -10, 23, 19, -4, -14, 27])).toEqual([[-14, -10], [19, 23], [23, 27]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of minAbsDiffSteps([4, 2, 1, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
