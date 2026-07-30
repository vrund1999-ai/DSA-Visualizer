import { describe, it, expect } from "vitest";
import { tastinessSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (price: number[], k: number) => {
  const steps = tastinessSteps(price, k);
  return steps[steps.length - 1].data.answer;
};

describe("tastinessSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([13, 5, 1, 8, 21, 2], 3)).toBe(8);
    expect(solve([1, 3, 1], 2)).toBe(2);
    expect(solve([7, 7, 7, 7], 2)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of tastinessSteps([13, 5, 1, 8, 21, 2], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
