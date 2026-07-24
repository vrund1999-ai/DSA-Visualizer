import { describe, it, expect } from "vitest";
import { triangleSteps } from "./algorithm";
import { CODE } from "./code";

const minTotal = (triangle: number[][]) => {
  const steps = triangleSteps(triangle);
  return steps[steps.length - 1].data.answer;
};

describe("triangleSteps", () => {
  it("computes the minimum top-to-bottom path sum", () => {
    expect(minTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toBe(11);
    expect(minTotal([[-10]])).toBe(-10);
    expect(minTotal([[1], [2, 3]])).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of triangleSteps([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
