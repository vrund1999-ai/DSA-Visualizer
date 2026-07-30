import { describe, it, expect } from "vitest";
import { numTreesSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number) => {
  const steps = numTreesSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("numTreesSteps", () => {
  it("counts unique BSTs (Catalan numbers)", () => {
    expect(solve(1)).toBe(1);
    expect(solve(2)).toBe(2);
    expect(solve(3)).toBe(5);
    expect(solve(4)).toBe(14);
    expect(solve(5)).toBe(42);
    expect(solve(10)).toBe(16796);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of numTreesSteps(5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
