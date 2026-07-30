import { describe, it, expect } from "vitest";
import { shortestPathSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (grid: number[][], k: number) => {
  const steps = shortestPathSteps(grid, k);
  return steps[steps.length - 1].data.answer;
};

describe("shortestPathSteps", () => {
  it("matches the canonical examples", () => {
    expect(
      solve([[0, 0, 0], [1, 1, 0], [0, 0, 0], [0, 1, 1], [0, 0, 0]], 1),
    ).toBe(6);
    expect(solve([[0, 1, 1], [1, 1, 1], [1, 0, 0]], 1)).toBe(-1);
    expect(solve([[0]], 0)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of shortestPathSteps([[0, 0, 0], [1, 1, 0], [0, 0, 0], [0, 1, 1], [0, 0, 0]], 1)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
