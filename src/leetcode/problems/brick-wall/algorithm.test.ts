import { describe, it, expect } from "vitest";
import { brickSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (wall: number[][]) => {
  const steps = brickSteps(wall);
  return steps[steps.length - 1].data.answer;
};

describe("brickSteps", () => {
  it("finds the fewest bricks a vertical line crosses", () => {
    expect(solve([[1, 2, 2, 1], [3, 1, 2], [1, 3, 2], [2, 4], [3, 1, 2], [1, 3, 1, 1]])).toBe(2);
    expect(solve([[1], [1], [1]])).toBe(3);
    expect(solve([[1, 1], [2], [1, 1]])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of brickSteps([[1, 2, 2, 1], [3, 1, 2], [1, 3, 2]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
