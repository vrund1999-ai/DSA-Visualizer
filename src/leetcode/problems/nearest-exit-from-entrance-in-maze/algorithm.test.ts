import { describe, it, expect } from "vitest";
import { mazeExitSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (maze: string[][], entrance: number[]) => {
  const steps = mazeExitSteps(maze, entrance);
  return steps[steps.length - 1].data.answer;
};

describe("mazeExitSteps", () => {
  it("finds the nearest exit distance", () => {
    expect(solve([["+", "+", ".", "+"], [".", ".", ".", "+"], ["+", "+", "+", "."]], [1, 2])).toBe(1);
    expect(solve([["+", "+", "+"], [".", ".", "."], ["+", "+", "+"]], [1, 0])).toBe(2);
    expect(solve([[".", "+"]], [0, 0])).toBe(-1);
  });

  it("does not mutate the caller's maze", () => {
    const maze = [[".", "+"], [".", "."]];
    mazeExitSteps(maze, [0, 0]);
    expect(maze).toEqual([[".", "+"], [".", "."]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of mazeExitSteps([["+", "+", ".", "+"], [".", ".", ".", "+"], ["+", "+", "+", "."]], [1, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
