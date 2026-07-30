import { describe, it, expect } from "vitest";
import { mhtSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number, edges: number[][]) => {
  const steps = mhtSteps(n, edges);
  return new Set(steps[steps.length - 1].data.answer);
};

describe("mhtSteps", () => {
  it("finds the minimum-height-tree roots", () => {
    expect(solve(4, [[1, 0], [1, 2], [1, 3]])).toEqual(new Set([1]));
    expect(solve(6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]])).toEqual(new Set([3, 4]));
    expect(solve(1, [])).toEqual(new Set([0]));
    expect(solve(2, [[0, 1]])).toEqual(new Set([0, 1]));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of mhtSteps(6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
