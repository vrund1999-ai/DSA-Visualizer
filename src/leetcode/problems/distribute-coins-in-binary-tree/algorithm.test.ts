import { describe, it, expect } from "vitest";
import { coinsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (heap: (number | null)[]) => {
  const steps = coinsSteps(heap);
  return steps[steps.length - 1].data.answer;
};

describe("coinsSteps", () => {
  it("computes the minimum coin-distribution moves", () => {
    expect(solve([3, 0, 0])).toBe(2);
    expect(solve([0, 3, 0])).toBe(3);
    expect(solve([1, 0, 0, null, 3])).toBe(4);
    expect(solve([1])).toBe(0);
    expect(solve([1, 0, 2])).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of coinsSteps([1, 0, 0, null, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
