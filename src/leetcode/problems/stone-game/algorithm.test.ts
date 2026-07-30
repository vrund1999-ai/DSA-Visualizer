import { describe, it, expect } from "vitest";
import { stoneSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (piles: number[]) => {
  const steps = stoneSteps(piles);
  return steps[steps.length - 1].data.answer;
};

describe("stoneSteps", () => {
  it("decides whether the first player wins", () => {
    expect(solve([5, 3, 4, 5])).toBe(true);
    expect(solve([3, 7, 2, 3])).toBe(true);
    expect(solve([1, 100])).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of stoneSteps([5, 3, 4, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
