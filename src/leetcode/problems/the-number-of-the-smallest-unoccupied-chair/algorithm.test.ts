import { describe, it, expect } from "vitest";
import { chairSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (times: number[][], target: number) => {
  const steps = chairSteps(times, target);
  return steps[steps.length - 1].data.answer;
};

describe("chairSteps", () => {
  it("returns the target friend's chair number", () => {
    expect(solve([[1, 4], [2, 3], [4, 6]], 1)).toBe(1);
    expect(solve([[3, 10], [1, 5], [2, 6]], 0)).toBe(2);
    expect(solve([[1, 2], [3, 4]], 1)).toBe(0);
    // F3 (chair 0) leaves at t=2 before F0 arrives at t=4, so F0 reuses chair 0.
    expect(solve([[4, 5], [12, 13], [5, 6], [1, 2]], 0)).toBe(0);
    // overlapping arrivals force a third chair for the target
    expect(solve([[1, 10], [2, 10], [3, 10]], 2)).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of chairSteps([[3, 10], [1, 5], [2, 6]], 0)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
