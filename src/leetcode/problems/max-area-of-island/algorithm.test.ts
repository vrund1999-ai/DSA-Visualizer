import { describe, it, expect } from "vitest";
import { maxIslandSteps } from "./algorithm";
import { CODE } from "./code";

const maxArea = (grid: number[][]) => {
  const steps = maxIslandSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("maxIslandSteps", () => {
  it("finds the largest island area", () => {
    expect(maxArea([[0, 1, 1, 0, 0], [1, 1, 0, 0, 1], [0, 0, 0, 1, 1], [0, 1, 0, 1, 0]])).toBe(4);
    expect(maxArea([[0, 0, 0], [0, 0, 0]])).toBe(0);
    expect(maxArea([[1, 1], [1, 1]])).toBe(4);
    expect(maxArea([[1, 0, 1]])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxIslandSteps([[1, 1], [0, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
