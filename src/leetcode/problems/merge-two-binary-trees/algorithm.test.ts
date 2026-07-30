import { describe, it, expect } from "vitest";
import { mergeTreesSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (t1: (number | null)[], t2: (number | null)[]) => {
  const steps = mergeTreesSteps(t1, t2);
  return steps[steps.length - 1].data.answer;
};

describe("mergeTreesSteps", () => {
  it("merges two binary trees", () => {
    expect(solve([1, 3, 2, 5], [2, 1, 3, null, 4, null, 7])).toEqual([3, 4, 5, 5, 4, null, 7]);
    expect(solve([1], [1, 2])).toEqual([2, 2]);
    expect(solve([], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of mergeTreesSteps([1, 3, 2, 5], [2, 1, 3, null, 4, null, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
