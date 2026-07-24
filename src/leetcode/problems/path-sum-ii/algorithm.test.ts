import { describe, it, expect } from "vitest";
import { pathSumSteps } from "./algorithm";
import { CODE } from "./code";

const paths = (heap: (number | null)[], target: number) => {
  const steps = pathSumSteps(heap, target);
  return steps[steps.length - 1].data.results;
};

describe("pathSumSteps", () => {
  it("finds all root-to-leaf paths hitting the target", () => {
    expect(paths([5, 4, 8, 11, null, 13, 4, 7, 2], 22)).toEqual([[5, 4, 11, 2]]);
    expect(paths([1, 2, 3], 4)).toEqual([[1, 3]]);
    expect(paths([1, 2], 0)).toEqual([]);
    expect(paths([], 0)).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of pathSumSteps([5, 4, 8, 11, null, 13, 4, 7, 2], 22)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
