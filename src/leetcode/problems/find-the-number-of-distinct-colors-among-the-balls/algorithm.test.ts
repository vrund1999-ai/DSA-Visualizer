import { describe, it, expect } from "vitest";
import { distinctColorsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (queries: number[][]) => {
  const steps = distinctColorsSteps(queries);
  return steps[steps.length - 1].data.answers;
};

describe("distinctColorsSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([[1, 4], [2, 5], [1, 3], [3, 4]])).toEqual([1, 2, 2, 3]);
    expect(solve([[0, 1], [1, 2], [2, 2], [3, 4], [4, 5]])).toEqual([1, 2, 2, 3, 4]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of distinctColorsSteps([[1, 4], [2, 5], [1, 3], [3, 4]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
