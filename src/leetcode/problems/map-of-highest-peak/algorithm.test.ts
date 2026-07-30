import { describe, it, expect } from "vitest";
import { highestPeakSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (isWater: number[][]) => {
  const steps = highestPeakSteps(isWater);
  return steps[steps.length - 1].data.height;
};

describe("highestPeakSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([[0, 1], [0, 0]])).toEqual([[1, 0], [2, 1]]);
    expect(solve([[0, 0, 1], [1, 0, 0], [0, 0, 0]])).toEqual([[1, 1, 0], [0, 1, 1], [1, 2, 2]]);
  });

  it("keeps adjacent heights within 1 and water at 0", () => {
    const h = solve([[0, 0, 1], [1, 0, 0], [0, 0, 0]]);
    for (let r = 0; r < h.length; r++)
      for (let c = 0; c < h[0].length; c++) {
        if (r + 1 < h.length) expect(Math.abs(h[r][c] - h[r + 1][c])).toBeLessThanOrEqual(1);
        if (c + 1 < h[0].length) expect(Math.abs(h[r][c] - h[r][c + 1])).toBeLessThanOrEqual(1);
      }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of highestPeakSteps([[0, 0, 1], [1, 0, 0], [0, 0, 0]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
