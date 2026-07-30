import { describe, it, expect } from "vitest";
import { consecDiffSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number, k: number) => {
  const steps = consecDiffSteps(n, k);
  return new Set(steps[steps.length - 1].data.answer);
};

describe("consecDiffSteps", () => {
  it("generates numbers with the given consecutive difference", () => {
    expect(solve(3, 7)).toEqual(new Set([181, 292, 707, 818, 929]));
    expect(solve(2, 1)).toEqual(new Set([10, 12, 21, 23, 32, 34, 43, 45, 54, 56, 65, 67, 76, 78, 87, 89, 98]));
    expect(solve(1, 0)).toEqual(new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    expect(solve(2, 0)).toEqual(new Set([11, 22, 33, 44, 55, 66, 77, 88, 99]));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of consecDiffSteps(3, 7)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
