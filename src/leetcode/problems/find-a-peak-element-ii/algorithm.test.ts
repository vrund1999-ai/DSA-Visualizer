import { describe, it, expect } from "vitest";
import { peak2DSteps } from "./algorithm";
import { CODE } from "./code";

const isPeak = (mat: number[][], rc: [number, number] | null) => {
  if (!rc) return false;
  const [r, c] = rc;
  const v = mat[r][c];
  const nb = [
    [r - 1, c],
    [r + 1, c],
    [r, c - 1],
    [r, c + 1],
  ];
  return nb.every(([nr, nc]) => nr < 0 || nc < 0 || nr >= mat.length || nc >= mat[0].length || mat[nr][nc] < v);
};

const findPeak = (mat: number[][]) => peak2DSteps(mat)[peak2DSteps(mat).length - 1].data.answer;

describe("peak2DSteps", () => {
  it("returns a valid peak position", () => {
    const cases = [
      [[1, 4], [3, 2]],
      [
        [10, 20, 15],
        [21, 30, 14],
        [7, 16, 32],
      ],
      [[1]],
      [[1, 2, 3, 4, 5]],
    ];
    for (const mat of cases) expect(isPeak(mat, findPeak(mat))).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of peak2DSteps([[10, 20, 15], [21, 30, 14], [7, 16, 32]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
