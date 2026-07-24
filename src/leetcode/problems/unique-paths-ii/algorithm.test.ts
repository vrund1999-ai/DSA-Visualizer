import { describe, it, expect } from "vitest";
import { uniquePathsSteps } from "./algorithm";
import { CODE } from "./code";

const paths = (grid: number[][]) => {
  const steps = uniquePathsSteps(grid);
  const { dp } = steps[steps.length - 1].data;
  return dp[dp.length - 1][dp[0].length - 1];
};

describe("uniquePathsSteps", () => {
  it("counts obstacle-free paths", () => {
    expect(paths([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toBe(2);
    expect(paths([[0, 1], [0, 0]])).toBe(1);
    expect(paths([[1]])).toBe(0);
    expect(paths([[0, 0], [0, 0]])).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of uniquePathsSteps([[0, 0, 0], [0, 1, 0], [0, 0, 0]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
