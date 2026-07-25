import { describe, it, expect } from "vitest";
import { tictactoeSteps } from "./algorithm";
import { CODE } from "./code";

const winner = (moves: number[][]) => {
  const steps = tictactoeSteps(moves);
  return steps[steps.length - 1].data.answer;
};

describe("tictactoeSteps", () => {
  it("determines the game outcome", () => {
    expect(winner([[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]])).toBe("A");
    expect(winner([[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]])).toBe("B");
    expect(
      winner([[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]]),
    ).toBe("Draw");
    expect(winner([[0, 0], [1, 1]])).toBe("Pending");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of tictactoeSteps([[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
