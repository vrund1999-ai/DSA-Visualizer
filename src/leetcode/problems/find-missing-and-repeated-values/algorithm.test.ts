import { describe, it, expect } from "vitest";
import { missingRepeatedSteps } from "./algorithm";
import { CODE } from "./code";

const answer = (grid: number[][]) => {
  const steps = missingRepeatedSteps(grid);
  const { repeated, missing } = steps[steps.length - 1].data;
  return [repeated, missing];
};

describe("missingRepeatedSteps", () => {
  it("finds the repeated and missing values", () => {
    expect(answer([[9, 1, 7], [8, 9, 2], [3, 4, 6]])).toEqual([9, 5]);
    expect(answer([[1, 3], [2, 2]])).toEqual([2, 4]);
    expect(answer([[1, 1], [3, 4]])).toEqual([1, 2]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of missingRepeatedSteps([[9, 1, 7], [8, 9, 2], [3, 4, 6]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
