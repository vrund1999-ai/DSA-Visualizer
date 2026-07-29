import { describe, it, expect } from "vitest";
import { lifeSteps } from "./algorithm";
import { CODE } from "./code";

const next = (board: number[][]) => {
  const steps = lifeSteps(board);
  return steps[steps.length - 1].data.answer;
};

describe("lifeSteps", () => {
  it("computes the next generation", () => {
    expect(next([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]])).toEqual([
      [0, 0, 0],
      [1, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ]);
    expect(next([[1, 1], [1, 0]])).toEqual([[1, 1], [1, 1]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of lifeSteps([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
