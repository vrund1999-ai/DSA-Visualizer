import { describe, it, expect } from "vitest";
import { prefixCommonSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (A: number[], B: number[]) => {
  const steps = prefixCommonSteps(A, B);
  return steps[steps.length - 1].data.answer;
};

describe("prefixCommonSteps", () => {
  it("computes the prefix common array", () => {
    expect(solve([1, 3, 2, 4], [3, 1, 2, 4])).toEqual([0, 2, 3, 4]);
    expect(solve([2, 3, 1], [3, 1, 2])).toEqual([0, 1, 3]);
    expect(solve([1], [1])).toEqual([1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of prefixCommonSteps([1, 3, 2, 4], [3, 1, 2, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
