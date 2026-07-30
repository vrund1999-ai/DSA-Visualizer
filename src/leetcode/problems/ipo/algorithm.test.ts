import { describe, it, expect } from "vitest";
import { ipoSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (k: number, w: number, profits: number[], capital: number[]) => {
  const steps = ipoSteps(k, w, profits, capital);
  return steps[steps.length - 1].data.answer;
};

describe("ipoSteps", () => {
  it("maximizes capital greedily", () => {
    expect(solve(2, 0, [1, 2, 3], [0, 1, 1])).toBe(4);
    expect(solve(3, 0, [1, 2, 3], [0, 1, 2])).toBe(6);
    expect(solve(1, 2, [1, 2, 3], [1, 1, 2])).toBe(5);
  });

  it("stops early when nothing is affordable", () => {
    expect(solve(5, 0, [5], [3])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of ipoSteps(3, 0, [1, 2, 3, 5], [0, 1, 1, 2])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
