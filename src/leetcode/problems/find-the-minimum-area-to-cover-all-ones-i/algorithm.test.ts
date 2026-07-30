import { describe, it, expect } from "vitest";
import { minAreaSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (grid: number[][]) => {
  const steps = minAreaSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("minAreaSteps", () => {
  it("computes the minimum covering area", () => {
    expect(solve([[0, 1, 0], [1, 0, 1]])).toBe(6);
    expect(solve([[1, 0], [0, 0]])).toBe(1);
    expect(solve([[1, 1], [1, 1]])).toBe(4);
    expect(solve([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of minAreaSteps([[0, 1, 0], [1, 0, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
