import { describe, it, expect } from "vitest";
import { countPathsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number, roads: number[][]) => {
  const steps = countPathsSteps(n, roads);
  return steps[steps.length - 1].data.answer;
};

describe("countPathsSteps", () => {
  it("counts shortest paths", () => {
    expect(solve(7, [[0, 6, 7], [0, 1, 2], [1, 2, 3], [1, 3, 3], [6, 3, 3], [3, 5, 1], [6, 5, 1], [2, 5, 1], [0, 4, 5], [4, 6, 2]])).toBe(4);
    expect(solve(2, [[1, 0, 10]])).toBe(1);
    expect(solve(3, [[0, 1, 1], [0, 2, 1], [1, 2, 1]])).toBe(1);
    expect(solve(4, [[0, 1, 1], [0, 2, 1], [1, 3, 1], [2, 3, 1]])).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of countPathsSteps(3, [[0, 1, 1], [0, 2, 1], [1, 2, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
