import { describe, it, expect } from "vitest";
import { shortestPathSteps } from "./algorithm";
import { CODE } from "./code";

const shortest = (grid: number[][]) => {
  const steps = shortestPathSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("shortestPathSteps", () => {
  it("computes the shortest 8-directional path", () => {
    expect(shortest([[0, 1], [1, 0]])).toBe(2);
    expect(shortest([[0, 0, 0], [1, 1, 0], [1, 1, 0]])).toBe(4);
    expect(shortest([[1, 0, 0], [1, 1, 0], [1, 1, 0]])).toBe(-1);
    expect(shortest([[0]])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of shortestPathSteps([[0, 0, 0], [1, 1, 0], [1, 1, 0]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
