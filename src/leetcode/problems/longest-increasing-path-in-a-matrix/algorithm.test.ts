import { describe, it, expect } from "vitest";
import { longestPathSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (matrix: number[][]) => {
  const steps = longestPathSteps(matrix);
  return steps[steps.length - 1].data.answer;
};

describe("longestPathSteps", () => {
  it("computes the longest increasing path", () => {
    expect(solve([[9, 9, 4], [6, 6, 8], [2, 1, 1]])).toBe(4);
    expect(solve([[3, 4, 5], [3, 2, 6], [2, 2, 1]])).toBe(4);
    expect(solve([[1]])).toBe(1);
    expect(solve([[1, 2], [4, 3]])).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of longestPathSteps([[9, 9, 4], [6, 6, 8], [2, 1, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
