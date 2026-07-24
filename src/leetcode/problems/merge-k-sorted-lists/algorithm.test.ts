import { describe, it, expect } from "vitest";
import { mergeKSteps } from "./algorithm";
import { CODE } from "./code";

const merge = (lists: number[][]) => {
  const steps = mergeKSteps(lists);
  return steps[steps.length - 1].data.merged;
};

describe("mergeKSteps", () => {
  it("merges k sorted lists", () => {
    expect(merge([[1, 4, 5], [1, 3, 4], [2, 6]])).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
    expect(merge([])).toEqual([]);
    expect(merge([[]])).toEqual([]);
    expect(merge([[1], [0]])).toEqual([0, 1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of mergeKSteps([[1, 4, 5], [1, 3, 4], [2, 6]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
