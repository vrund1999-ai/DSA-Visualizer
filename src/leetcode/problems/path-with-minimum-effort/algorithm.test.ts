import { describe, it, expect } from "vitest";
import { effortSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (grid: number[][]) => {
  const steps = effortSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("effortSteps", () => {
  it("computes the minimum-effort path cost", () => {
    expect(solve([[1, 2, 2], [3, 8, 2], [5, 3, 5]])).toBe(2);
    expect(solve([[1, 2, 3], [3, 8, 4], [5, 3, 5]])).toBe(1);
    expect(solve([[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]])).toBe(0);
    expect(solve([[3]])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of effortSteps([[1, 2, 2], [3, 8, 2], [5, 3, 5]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
