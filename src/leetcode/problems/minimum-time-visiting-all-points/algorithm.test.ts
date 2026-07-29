import { describe, it, expect } from "vitest";
import { visitPointsSteps } from "./algorithm";
import { CODE } from "./code";

const minTime = (points: number[][]) => {
  const steps = visitPointsSteps(points);
  return steps[steps.length - 1].data.answer;
};

describe("visitPointsSteps", () => {
  it("sums Chebyshev distances", () => {
    expect(minTime([[1, 1], [3, 4], [-1, 0]])).toBe(7);
    expect(minTime([[3, 2], [-2, 2]])).toBe(5);
    expect(minTime([[0, 0]])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of visitPointsSteps([[1, 1], [3, 4], [-1, 0]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
