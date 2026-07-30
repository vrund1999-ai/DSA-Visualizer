import { describe, it, expect } from "vitest";
import { rangeSum2DSteps } from "./algorithm";
import { CODE } from "./code";

const M = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
];

const query = (q: [number, number, number, number]) => {
  const steps = rangeSum2DSteps(M, [q]);
  return steps.find((s) => s.data.result !== null)!.data.result;
};

const brute = (m: number[][], [r1, c1, r2, c2]: number[]) => {
  let sum = 0;
  for (let r = r1; r <= r2; r++) for (let c = c1; c <= c2; c++) sum += m[r][c];
  return sum;
};

describe("rangeSum2DSteps", () => {
  it("answers rectangle sum queries", () => {
    const qs: [number, number, number, number][] = [
      [2, 1, 4, 3],
      [1, 1, 2, 2],
      [1, 2, 2, 4],
      [0, 0, 4, 4],
      [3, 3, 3, 3],
    ];
    for (const q of qs) expect(query(q)).toBe(brute(M, q));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rangeSum2DSteps(M, [[2, 1, 4, 3]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
