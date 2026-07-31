import { describe, it, expect } from "vitest";
import { divisorGameSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number) => {
  const steps = divisorGameSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("divisorGameSteps", () => {
  it("matches the even-wins pattern", () => {
    expect(solve(2)).toBe(true);
    expect(solve(3)).toBe(false);
    expect(solve(4)).toBe(true);
    expect(solve(5)).toBe(false);
    expect(solve(8)).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of divisorGameSteps(8)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
