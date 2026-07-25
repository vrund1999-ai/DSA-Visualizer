import { describe, it, expect } from "vitest";
import { candySteps } from "./algorithm";
import { CODE } from "./code";

const crush = (board: number[][]) => {
  const steps = candySteps(board);
  return steps[steps.length - 1].data.answer!;
};

const isStable = (g: number[][]) => {
  const R = g.length;
  const C = g[0].length;
  for (let r = 0; r < R; r++)
    for (let c = 0; c + 2 < C; c++) if (g[r][c] !== 0 && g[r][c] === g[r][c + 1] && g[r][c] === g[r][c + 2]) return false;
  for (let c = 0; c < C; c++)
    for (let r = 0; r + 2 < R; r++) if (g[r][c] !== 0 && g[r][c] === g[r + 1][c] && g[r][c] === g[r + 2][c]) return false;
  return true;
};

describe("candySteps", () => {
  it("produces a stable board with no runs of three", () => {
    const board = [
      [3, 3, 3, 1, 2],
      [1, 2, 4, 5, 5],
      [6, 1, 2, 3, 5],
      [1, 2, 3, 4, 5],
      [2, 3, 4, 5, 6],
    ];
    expect(isStable(crush(board))).toBe(true);
  });

  it("preserves gravity: zeros only sit above non-zeros in a column", () => {
    const result = crush([
      [1, 1, 1],
      [2, 3, 4],
      [5, 6, 7],
    ]);
    // Candies fall down, so top-to-bottom each column is zeros first, then non-zeros.
    for (let c = 0; c < 3; c++) {
      let sawNonZero = false;
      for (let r = 0; r < 3; r++) {
        if (result[r][c] !== 0) sawNonZero = true;
        else if (sawNonZero) throw new Error("zero below a non-zero (gravity broken)");
      }
    }
    expect(true).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of candySteps([[1, 1, 1], [2, 3, 4], [5, 6, 7]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
