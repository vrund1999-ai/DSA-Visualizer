import { describe, it, expect } from "vitest";
import { countNegSteps } from "./algorithm";
import { CODE } from "./code";

const count = (grid: number[][]) => {
  const steps = countNegSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("countNegSteps", () => {
  it("counts negatives in a doubly-sorted matrix", () => {
    expect(count([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]])).toBe(8);
    expect(count([[3, 2], [1, 0]])).toBe(0);
    expect(count([[-1]])).toBe(1);
    expect(count([[5, 1, 0], [-5, -5, -5]])).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of countNegSteps([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
