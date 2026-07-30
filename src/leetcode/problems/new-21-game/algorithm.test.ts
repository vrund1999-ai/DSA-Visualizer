import { describe, it, expect } from "vitest";
import { game21Steps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number, k: number, maxPts: number) => {
  const steps = game21Steps(n, k, maxPts);
  return steps[steps.length - 1].data.answer;
};

describe("game21Steps", () => {
  it("computes the win probability", () => {
    expect(solve(10, 1, 10)).toBeCloseTo(1.0, 5);
    expect(solve(6, 1, 10)).toBeCloseTo(0.6, 5);
    expect(solve(21, 17, 10)).toBeCloseTo(0.73278, 4);
    expect(solve(0, 0, 1)).toBeCloseTo(1.0, 5);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of game21Steps(21, 17, 10)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
