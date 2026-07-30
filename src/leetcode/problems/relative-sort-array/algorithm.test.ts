import { describe, it, expect } from "vitest";
import { relativeSortSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (arr1: number[], arr2: number[]) => {
  const steps = relativeSortSteps(arr1, arr2);
  return steps[steps.length - 1].data.output;
};

describe("relativeSortSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])).toEqual([2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]);
    expect(solve([28, 6, 22, 8, 44, 17], [22, 28, 8, 6])).toEqual([22, 28, 8, 6, 17, 44]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of relativeSortSteps([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
