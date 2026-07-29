import { describe, it, expect } from "vitest";
import { maxPointsSteps } from "./algorithm";
import { CODE } from "./code";

const maxPoints = (points: number[][]) => {
  const steps = maxPointsSteps(points);
  return steps[steps.length - 1].data.answer;
};

describe("maxPointsSteps", () => {
  it("finds the max collinear points", () => {
    expect(maxPoints([[1, 1], [2, 2], [3, 3]])).toBe(3);
    expect(maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]])).toBe(4);
    expect(maxPoints([[0, 0]])).toBe(1);
    expect(maxPoints([[4, 0], [4, -1], [4, 5]])).toBe(3); // vertical line
    expect(maxPoints([[1, 1], [2, 2], [3, 3], [10, 0]])).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxPointsSteps([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
