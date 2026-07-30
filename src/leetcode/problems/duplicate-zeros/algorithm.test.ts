import { describe, it, expect } from "vitest";
import { duplicateZerosSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (arr: number[]) => {
  const steps = duplicateZerosSteps(arr);
  return steps[steps.length - 1].data.result;
};

describe("duplicateZerosSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([1, 0, 2, 3, 0, 4, 5, 0])).toEqual([1, 0, 0, 2, 3, 0, 0, 4]);
    expect(solve([1, 2, 3])).toEqual([1, 2, 3]);
    expect(solve([0, 0, 0])).toEqual([0, 0, 0]);
  });

  it("does not split a trailing zero past the end", () => {
    expect(solve([1, 5, 0])).toEqual([1, 5, 0]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of duplicateZerosSteps([1, 0, 2, 3, 0, 4, 5, 0])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
