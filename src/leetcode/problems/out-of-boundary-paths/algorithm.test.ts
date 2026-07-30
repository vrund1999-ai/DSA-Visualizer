import { describe, it, expect } from "vitest";
import { outPathsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (m: number, n: number, maxMove: number, sr: number, sc: number) => {
  const steps = outPathsSteps(m, n, maxMove, sr, sc);
  return steps[steps.length - 1].data.answer;
};

describe("outPathsSteps", () => {
  it("counts out-of-boundary paths", () => {
    expect(solve(2, 2, 2, 0, 0)).toBe(6);
    expect(solve(1, 3, 3, 0, 1)).toBe(12);
    expect(solve(2, 3, 3, 0, 1)).toBe(17);
    expect(solve(1, 1, 0, 0, 0)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of outPathsSteps(2, 3, 3, 0, 1)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
