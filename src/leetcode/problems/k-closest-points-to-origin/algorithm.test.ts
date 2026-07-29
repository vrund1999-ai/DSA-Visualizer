import { describe, it, expect } from "vitest";
import { kClosestSteps } from "./algorithm";
import { CODE } from "./code";

const closest = (points: number[][], k: number) => {
  const steps = kClosestSteps(points, k);
  const res = steps[steps.length - 1].data.answer!;
  return res.map((p) => p[0] * p[0] + p[1] * p[1]).sort((a, b) => a - b);
};

describe("kClosestSteps", () => {
  it("returns the k nearest points (by distance)", () => {
    expect(closest([[1, 3], [-2, 2]], 1)).toEqual([8]);
    expect(closest([[3, 3], [5, -1], [-2, 4]], 2)).toEqual([18, 20]);
    expect(closest([[0, 1], [1, 0]], 2)).toEqual([1, 1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kClosestSteps([[1, 3], [-2, 2], [5, 8], [0, 1]], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
