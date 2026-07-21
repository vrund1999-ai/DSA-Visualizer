import { describe, it, expect } from "vitest";
import { mergeListsSteps } from "./algorithm";
import { CODE } from "./code";

const merge = (l1: number[], l2: number[]) => {
  const steps = mergeListsSteps(l1, l2);
  return steps[steps.length - 1].data.merged;
};

describe("mergeListsSteps", () => {
  it("merges two sorted lists", () => {
    expect(merge([1, 2, 4], [1, 3, 4])).toEqual([1, 1, 2, 3, 4, 4]);
  });

  it("handles empty lists", () => {
    expect(merge([], [])).toEqual([]);
    expect(merge([], [0])).toEqual([0]);
    expect(merge([5], [])).toEqual([5]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of mergeListsSteps([1, 2, 4], [1, 3, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
