import { describe, it, expect } from "vitest";
import { networkSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number, connections: number[][]) => {
  const steps = networkSteps(n, connections);
  return steps[steps.length - 1].data.answer;
};

describe("networkSteps", () => {
  it("computes the minimum cable moves", () => {
    expect(solve(4, [[0, 1], [0, 2], [1, 2]])).toBe(1);
    expect(solve(6, [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3]])).toBe(2);
    expect(solve(6, [[0, 1], [0, 2], [0, 3], [1, 2]])).toBe(-1);
    expect(solve(5, [[0, 1], [0, 2], [3, 4], [2, 3]])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of networkSteps(6, [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
