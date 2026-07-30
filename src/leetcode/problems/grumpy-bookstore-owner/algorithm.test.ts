import { describe, it, expect } from "vitest";
import { grumpySteps } from "./algorithm";
import { CODE } from "./code";

const solve = (customers: number[], grumpy: number[], X: number) => {
  const steps = grumpySteps(customers, grumpy, X);
  return steps[steps.length - 1].data.answer;
};

describe("grumpySteps", () => {
  it("maximizes satisfied customers", () => {
    expect(solve([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)).toBe(16);
    expect(solve([1], [0], 1)).toBe(1);
    expect(solve([4, 10, 10], [1, 1, 0], 2)).toBe(24);
    expect(solve([2, 6, 6, 9], [0, 0, 1, 1], 1)).toBe(17);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of grumpySteps([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
