import { describe, it, expect } from "vitest";
import { minSwapsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (grid: number[][]) => {
  const steps = minSwapsSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("minSwapsSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([[0, 0, 1], [1, 1, 0], [1, 0, 0]])).toBe(3);
    expect(solve([[0, 1, 1, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 1, 1, 0]])).toBe(-1);
    expect(solve([[1, 0, 0], [1, 1, 0], [1, 1, 1]])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of minSwapsSteps([[0, 0, 1], [1, 1, 0], [1, 0, 0]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
