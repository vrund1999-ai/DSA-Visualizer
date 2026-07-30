import { describe, it, expect } from "vitest";
import { buildingsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (grid: number[][]) => {
  const steps = buildingsSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("buildingsSteps", () => {
  it("computes the minimum total distance", () => {
    expect(solve([[1, 0, 2, 0, 1], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]])).toBe(7);
    expect(solve([[1, 0]])).toBe(1);
    expect(solve([[1, 2, 0]])).toBe(-1);
    expect(solve([[1, 0, 1]])).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of buildingsSteps([[1, 0, 2, 0, 1], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
