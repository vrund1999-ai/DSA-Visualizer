import { describe, it, expect } from "vitest";
import { distanceValueSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (arr1: number[], arr2: number[], d: number) => {
  const steps = distanceValueSteps(arr1, arr2, d);
  return steps[steps.length - 1].data.answer;
};

describe("distanceValueSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([4, 5, 8], [10, 9, 1, 8], 2)).toBe(2);
    expect(solve([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3)).toBe(2);
    expect(solve([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6)).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of distanceValueSteps([4, 5, 8], [10, 9, 1, 8], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
