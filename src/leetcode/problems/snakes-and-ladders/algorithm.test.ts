import { describe, it, expect } from "vitest";
import { snakesSteps } from "./algorithm";
import { CODE } from "./code";

const minMoves = (board: number[][]) => {
  const steps = snakesSteps(board);
  return steps[steps.length - 1].data.answer;
};

describe("snakesSteps", () => {
  it("finds the minimum dice moves", () => {
    expect(minMoves([
      [-1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1],
      [-1, 35, -1, -1, 13, -1],
      [-1, -1, -1, -1, -1, -1],
      [-1, 15, -1, -1, -1, -1],
    ])).toBe(4);
    expect(minMoves([[-1, -1], [-1, 3]])).toBe(1);
    expect(minMoves([[1, 1, -1], [1, 1, 1], [-1, 1, 1]])).toBe(-1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of snakesSteps([[-1, -1], [-1, 3]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
