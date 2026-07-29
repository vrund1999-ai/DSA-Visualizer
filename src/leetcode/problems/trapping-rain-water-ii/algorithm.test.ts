import { describe, it, expect } from "vitest";
import { trapSteps } from "./algorithm";
import { CODE } from "./code";

const trap = (grid: number[][]) => {
  const steps = trapSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("trapSteps", () => {
  it("computes trapped water volume", () => {
    expect(
      trap([
        [1, 4, 3, 1, 3, 2],
        [3, 2, 1, 3, 2, 4],
        [2, 3, 3, 2, 3, 1],
      ]),
    ).toBe(4);
    expect(
      trap([
        [3, 3, 3, 3, 3],
        [3, 2, 2, 2, 3],
        [3, 2, 1, 2, 3],
        [3, 2, 2, 2, 3],
        [3, 3, 3, 3, 3],
      ]),
    ).toBe(10);
  });

  it("returns 0 for grids too small to trap", () => {
    expect(trap([[1, 2], [3, 4]])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of trapSteps([
      [1, 4, 3, 1, 3, 2],
      [3, 2, 1, 3, 2, 4],
      [2, 3, 3, 2, 3, 1],
    ])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
