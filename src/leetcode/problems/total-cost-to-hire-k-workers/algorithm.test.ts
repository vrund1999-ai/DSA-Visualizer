import { describe, it, expect } from "vitest";
import { hireSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (costs: number[], k: number, candidates: number) => {
  const steps = hireSteps(costs, k, candidates);
  return steps[steps.length - 1].data.answer;
};

describe("hireSteps", () => {
  it("computes the total hiring cost", () => {
    expect(solve([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4)).toBe(11);
    expect(solve([1, 2, 4, 1], 3, 3)).toBe(4);
    expect(solve([10], 1, 1)).toBe(10);
    expect(solve([5, 5, 5, 5], 2, 1)).toBe(10);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of hireSteps([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
