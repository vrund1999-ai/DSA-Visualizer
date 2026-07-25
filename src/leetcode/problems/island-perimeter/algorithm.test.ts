import { describe, it, expect } from "vitest";
import { perimeterSteps } from "./algorithm";
import { CODE } from "./code";

const perimeter = (grid: number[][]) => {
  const steps = perimeterSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("perimeterSteps", () => {
  it("computes the island perimeter", () => {
    expect(perimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]])).toBe(16);
    expect(perimeter([[1]])).toBe(4);
    expect(perimeter([[1, 0]])).toBe(4);
    expect(perimeter([[1, 1], [1, 1]])).toBe(8);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of perimeterSteps([[1, 1], [1, 0]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
