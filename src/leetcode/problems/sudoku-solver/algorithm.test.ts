import { describe, it, expect } from "vitest";
import { sudokuSteps } from "./algorithm";
import { CODE } from "./code";

const puzzle = [
  [5, 3, 0, 6, 7, 8, 9, 1, 0],
  [6, 0, 2, 1, 9, 5, 3, 4, 8],
  [0, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 0, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 0],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 0, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 0, 7, 9],
];

const isValidSolution = (g: number[][]) => {
  const seen = (vals: number[]) => new Set(vals).size === 9 && vals.every((v) => v >= 1 && v <= 9);
  for (let i = 0; i < 9; i++) {
    if (!seen(g[i])) return false;
    if (!seen(g.map((row) => row[i]))) return false;
  }
  for (let br = 0; br < 9; br += 3)
    for (let bc = 0; bc < 9; bc += 3) {
      const cell: number[] = [];
      for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) cell.push(g[br + i][bc + j]);
      if (!seen(cell)) return false;
    }
  return true;
};

describe("sudokuSteps", () => {
  it("solves the puzzle into a valid completed board", () => {
    const steps = sudokuSteps(puzzle);
    const last = steps[steps.length - 1].data;
    expect(last.solved).toBe(true);
    expect(isValidSolution(last.grid)).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of sudokuSteps(puzzle)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
