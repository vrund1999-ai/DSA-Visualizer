import { describe, it, expect } from "vitest";
import { sudokuSteps } from "./algorithm";
import { CODE } from "./code";

const ROW = (s: string) => s.split("");
const valid = (rows: string[]) => {
  const board = rows.map(ROW);
  const steps = sudokuSteps(board);
  return steps[steps.length - 1].data.result;
};

const VALID = [
  "53..7....", "6..195...", ".98....6.",
  "8...6...3", "4..8.3..1", "7...2...6",
  ".6....28.", "...419..5", "....8..79",
];

describe("sudokuSteps", () => {
  it("accepts a valid board", () => {
    expect(valid(VALID)).toBe(true);
  });

  it("rejects a board with a column conflict", () => {
    const bad = [...VALID];
    bad[0] = "83..7...."; // 8 in column 0 conflicts with row 3's leading 8
    expect(valid(bad)).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of sudokuSteps(VALID.map(ROW))) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
