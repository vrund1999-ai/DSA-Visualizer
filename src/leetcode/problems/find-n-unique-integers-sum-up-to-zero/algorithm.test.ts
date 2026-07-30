import { describe, it, expect } from "vitest";
import { sumZeroSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number) => {
  const steps = sumZeroSteps(n);
  return steps[steps.length - 1].data.result;
};

describe("sumZeroSteps", () => {
  it("returns n distinct integers summing to zero", () => {
    for (const n of [1, 2, 3, 5, 8]) {
      const res = solve(n);
      expect(res).toHaveLength(n);
      expect(new Set(res).size).toBe(n);
      expect(res.reduce((a, b) => a + b, 0)).toBe(0);
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of sumZeroSteps(5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
