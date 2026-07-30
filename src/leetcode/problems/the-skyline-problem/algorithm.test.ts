import { describe, it, expect } from "vitest";
import { skylineSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (b: number[][]) => {
  const steps = skylineSteps(b);
  return steps[steps.length - 1].data.answer;
};

describe("skylineSteps", () => {
  it("computes the skyline key points", () => {
    expect(solve([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]])).toEqual([
      [2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0],
    ]);
    expect(solve([[0, 2, 3], [2, 5, 3]])).toEqual([[0, 3], [5, 0]]);
    expect(solve([[1, 2, 1]])).toEqual([[1, 1], [2, 0]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of skylineSteps([[2, 9, 10], [3, 7, 15], [5, 12, 12]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
