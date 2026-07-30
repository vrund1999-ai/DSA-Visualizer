import { describe, it, expect } from "vitest";
import { gridGameSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (grid: number[][]) => {
  const steps = gridGameSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("gridGameSteps", () => {
  it("computes robot 2's optimal score", () => {
    expect(solve([[2, 5, 4], [1, 5, 1]])).toBe(4);
    expect(solve([[3, 3, 1], [8, 5, 2]])).toBe(4);
    expect(solve([[1, 3, 1, 15], [1, 3, 3, 1]])).toBe(7);
    expect(solve([[1, 1], [1, 1]])).toBe(1);
    expect(solve([[5], [3]])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of gridGameSteps([[2, 5, 4], [1, 5, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
