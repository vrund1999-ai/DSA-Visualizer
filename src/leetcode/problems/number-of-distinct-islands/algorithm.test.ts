import { describe, it, expect } from "vitest";
import { distinctIslandsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (grid: number[][]) => {
  const steps = distinctIslandsSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("distinctIslandsSteps", () => {
  it("counts distinct island shapes", () => {
    expect(solve([[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 1, 1]])).toBe(1);
    expect(solve([[1, 1, 0, 1, 1], [1, 0, 0, 0, 0], [0, 0, 0, 0, 1], [1, 1, 0, 1, 1]])).toBe(3);
    expect(solve([[0, 0], [0, 0]])).toBe(0);
    expect(solve([[1]])).toBe(1);
  });

  it("does not mutate the caller's grid", () => {
    const grid = [[1, 1], [0, 0]];
    distinctIslandsSteps(grid);
    expect(grid).toEqual([[1, 1], [0, 0]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of distinctIslandsSteps([[1, 1, 0, 1, 1], [1, 0, 0, 0, 0], [0, 0, 0, 0, 1], [1, 1, 0, 1, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
