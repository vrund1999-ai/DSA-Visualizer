import { describe, it, expect } from "vitest";
import { frogSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (stones: number[]) => {
  const steps = frogSteps(stones);
  return steps[steps.length - 1].data.answer;
};

describe("frogSteps", () => {
  it("decides whether the frog can cross", () => {
    expect(solve([0, 1, 3, 5, 6, 8, 12, 17])).toBe(true);
    expect(solve([0, 1, 2, 3, 4, 8, 9, 11])).toBe(false);
    expect(solve([0, 1])).toBe(true);
    expect(solve([0, 2])).toBe(false);
    expect(solve([0, 1, 2, 3, 4, 8, 9, 11, 14])).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of frogSteps([0, 1, 3, 5, 6, 8, 12, 17])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
