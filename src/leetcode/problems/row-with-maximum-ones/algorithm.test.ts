import { describe, it, expect } from "vitest";
import { rowMaxSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (grid: number[][]) => {
  const steps = rowMaxSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("rowMaxSteps", () => {
  it("finds the row with the most ones", () => {
    expect(solve([[0, 1], [1, 0]])).toEqual([0, 1]);
    expect(solve([[0, 0, 0], [0, 1, 1]])).toEqual([1, 2]);
    expect(solve([[0, 0], [1, 1], [0, 0]])).toEqual([1, 2]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rowMaxSteps([[0, 1, 1, 0], [0, 0, 1, 0], [1, 1, 1, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
