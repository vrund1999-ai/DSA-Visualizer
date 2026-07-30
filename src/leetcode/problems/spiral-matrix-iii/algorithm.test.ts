import { describe, it, expect } from "vitest";
import { spiralSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (rows: number, cols: number, r: number, c: number) => {
  const steps = spiralSteps(rows, cols, r, c);
  return steps[steps.length - 1].data.answer;
};

describe("spiralSteps", () => {
  it("matches the known LeetCode examples", () => {
    expect(solve(1, 4, 0, 0)).toEqual([[0, 0], [0, 1], [0, 2], [0, 3]]);
    expect(solve(5, 6, 1, 4)).toEqual([
      [1, 4], [1, 5], [2, 5], [2, 4], [2, 3], [1, 3], [0, 3], [0, 4], [0, 5], [3, 5], [3, 4], [3, 3], [3, 2],
      [2, 2], [1, 2], [0, 2], [4, 5], [4, 4], [4, 3], [4, 2], [4, 1], [3, 1], [2, 1], [1, 1], [0, 1], [4, 0],
      [3, 0], [2, 0], [1, 0], [0, 0],
    ]);
  });

  it("visits exactly rows*cols cells with no duplicates", () => {
    const res = solve(5, 5, 2, 2)!;
    expect(res.length).toBe(25);
    expect(new Set(res.map(([r, c]) => `${r},${c}`)).size).toBe(25);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of spiralSteps(5, 5, 2, 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
