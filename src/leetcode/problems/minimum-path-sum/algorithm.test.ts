import { describe, it, expect } from "vitest";
import { minPathSteps } from "./algorithm";
import { CODE } from "./code";

const minSum = (grid: number[][]) => {
  const steps = minPathSteps(grid);
  const dp = steps[steps.length - 1].data.dp;
  return dp[grid.length - 1][grid[0].length - 1];
};

describe("minPathSteps", () => {
  it("computes the minimum path sum", () => {
    expect(
      minSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ]),
    ).toBe(7);
    expect(
      minSum([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    ).toBe(12);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of minPathSteps([[1, 2], [3, 4]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
