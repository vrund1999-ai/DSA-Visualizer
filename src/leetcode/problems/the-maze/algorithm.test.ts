import { describe, it, expect } from "vitest";
import { mazeSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (maze: number[][], start: number[], dest: number[]) => {
  const steps = mazeSteps(maze, start, dest);
  return steps[steps.length - 1].data.answer;
};

const MAZE = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
];

describe("mazeSteps", () => {
  it("decides whether the ball can stop at the destination", () => {
    expect(solve(MAZE, [0, 4], [4, 4])).toBe(true);
    expect(solve(MAZE, [0, 4], [3, 2])).toBe(false);
    expect(solve([[0, 0], [0, 0]], [0, 0], [1, 1])).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of mazeSteps(MAZE, [0, 4], [4, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
