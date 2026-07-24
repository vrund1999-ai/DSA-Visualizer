import { describe, it, expect } from "vitest";
import { surroundedSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (board: string[][]) => {
  const steps = surroundedSteps(board);
  return steps[steps.length - 1].data.board;
};

describe("surroundedSteps", () => {
  it("captures surrounded regions but keeps border-connected ones", () => {
    expect(solve([
      ["X", "X", "X", "X"],
      ["X", "O", "O", "X"],
      ["X", "X", "O", "X"],
      ["X", "O", "X", "X"],
    ])).toEqual([
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "O", "X", "X"],
    ]);
  });

  it("keeps everything when all O's touch the border", () => {
    expect(solve([["O", "O"], ["O", "O"]])).toEqual([["O", "O"], ["O", "O"]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of surroundedSteps([["X", "O"], ["O", "X"]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
