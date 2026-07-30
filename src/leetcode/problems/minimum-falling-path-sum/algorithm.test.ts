import { describe, it, expect } from "vitest";
import { fallingSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (matrix: number[][]) => {
  const steps = fallingSteps(matrix);
  return steps[steps.length - 1].data.answer;
};

describe("fallingSteps", () => {
  it("computes the minimum falling path sum", () => {
    expect(solve([[2, 1, 3], [6, 5, 4], [7, 8, 9]])).toBe(13);
    expect(solve([[-19, 57], [-40, -5]])).toBe(-59);
    expect(solve([[17]])).toBe(17);
    expect(solve([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toBe(12);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of fallingSteps([[2, 1, 3], [6, 5, 4], [7, 8, 9]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
