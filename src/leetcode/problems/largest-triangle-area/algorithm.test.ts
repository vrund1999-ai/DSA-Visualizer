import { describe, it, expect } from "vitest";
import { triangleSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (points: number[][]) => {
  const steps = triangleSteps(points);
  return steps[steps.length - 1].data.answer;
};

describe("triangleSteps", () => {
  it("computes the largest triangle area", () => {
    expect(solve([[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]])).toBeCloseTo(2, 5);
    expect(solve([[1, 0], [0, 0], [0, 1]])).toBeCloseTo(0.5, 5);
    expect(solve([[0, 0], [2, 0], [0, 3]])).toBeCloseTo(3, 5);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of triangleSteps([[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
