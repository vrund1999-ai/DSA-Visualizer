import { describe, it, expect } from "vitest";
import { arrowsSteps } from "./algorithm";
import { CODE } from "./code";

const minArrows = (points: number[][]) => {
  const steps = arrowsSteps(points);
  return steps[steps.length - 1].data.answer;
};

describe("arrowsSteps", () => {
  it("counts the minimum arrows", () => {
    expect(minArrows([[10, 16], [2, 8], [1, 6], [7, 12]])).toBe(2);
    expect(minArrows([[1, 2], [3, 4], [5, 6], [7, 8]])).toBe(4);
    expect(minArrows([[1, 2], [2, 3], [3, 4], [4, 5]])).toBe(2);
    expect(minArrows([[1, 10]])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of arrowsSteps([[10, 16], [2, 8], [1, 6], [7, 12]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
