import { describe, it, expect } from "vitest";
import { magicSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (grid: number[][]) => {
  const steps = magicSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("magicSteps", () => {
  it("counts 3x3 magic squares", () => {
    expect(solve([[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]])).toBe(1);
    expect(solve([[8]])).toBe(0);
    expect(solve([[4, 4], [3, 3]])).toBe(0);
    expect(solve([[2, 7, 6], [9, 5, 1], [4, 3, 8]])).toBe(1);
    expect(solve([[5, 5, 5], [5, 5, 5], [5, 5, 5]])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of magicSteps([[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
