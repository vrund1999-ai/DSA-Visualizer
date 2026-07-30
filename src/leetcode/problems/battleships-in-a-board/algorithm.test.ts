import { describe, it, expect } from "vitest";
import { battleSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (board: string[][]) => {
  const steps = battleSteps(board);
  return steps[steps.length - 1].data.answer;
};

describe("battleSteps", () => {
  it("counts the battleships", () => {
    expect(solve([["X", ".", ".", "X"], [".", ".", ".", "X"], [".", ".", ".", "X"]])).toBe(2);
    expect(solve([["."]])).toBe(0);
    expect(solve([["X"]])).toBe(1);
    expect(solve([["X", "X", "X"], [".", ".", "."], ["X", ".", "X"]])).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of battleSteps([["X", ".", ".", "X"], [".", ".", ".", "X"], [".", ".", ".", "X"]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
