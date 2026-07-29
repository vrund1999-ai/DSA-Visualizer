import { describe, it, expect } from "vitest";
import { delaySteps } from "./algorithm";
import { CODE } from "./code";

const delay = (times: number[][], n: number, k: number) => {
  const steps = delaySteps(times, n, k);
  return steps[steps.length - 1].data.answer;
};

describe("delaySteps", () => {
  it("computes the network delay time", () => {
    expect(delay([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2)).toBe(2);
    expect(delay([[1, 2, 1]], 2, 1)).toBe(1);
    expect(delay([[1, 2, 1]], 2, 2)).toBe(-1);
    expect(delay([[1, 2, 1], [2, 3, 2], [1, 3, 4]], 3, 1)).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of delaySteps([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
