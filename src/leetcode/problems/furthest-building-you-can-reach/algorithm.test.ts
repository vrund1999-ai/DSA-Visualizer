import { describe, it, expect } from "vitest";
import { furthestSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (heights: number[], bricks: number, ladders: number) => {
  const steps = furthestSteps(heights, bricks, ladders);
  return steps[steps.length - 1].data.answer;
};

describe("furthestSteps", () => {
  it("computes the furthest reachable building", () => {
    expect(solve([4, 2, 7, 6, 9, 14, 12], 5, 1)).toBe(4);
    expect(solve([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2)).toBe(7);
    expect(solve([14, 3, 19, 3], 17, 0)).toBe(3);
    expect(solve([1, 2], 0, 0)).toBe(0);
    expect(solve([1, 5, 1, 2, 3], 4, 1)).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of furthestSteps([4, 2, 7, 6, 9, 14, 12], 5, 1)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
