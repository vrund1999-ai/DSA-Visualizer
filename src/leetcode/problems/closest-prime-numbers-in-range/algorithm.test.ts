import { describe, it, expect } from "vitest";
import { closestPrimeSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (left: number, right: number) => {
  const steps = closestPrimeSteps(left, right);
  return steps[steps.length - 1].data.answer;
};

describe("closestPrimeSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve(10, 19)).toEqual([11, 13]);
    expect(solve(4, 6)).toEqual([-1, -1]);
    expect(solve(1, 4)).toEqual([2, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of closestPrimeSteps(10, 19)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
