import { describe, it, expect } from "vitest";
import { bottlesSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (numBottles: number, numExchange: number) => {
  const steps = bottlesSteps(numBottles, numExchange);
  return steps[steps.length - 1].data.answer;
};

describe("bottlesSteps", () => {
  it("computes the total bottles drunk", () => {
    expect(solve(9, 3)).toBe(13);
    expect(solve(15, 4)).toBe(19);
    expect(solve(5, 5)).toBe(6);
    expect(solve(2, 3)).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of bottlesSteps(15, 4)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
