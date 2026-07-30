import { describe, it, expect } from "vitest";
import { onesZeroesSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (strs: string[], m: number, n: number) => {
  const steps = onesZeroesSteps(strs, m, n);
  return steps[steps.length - 1].data.answer;
};

describe("onesZeroesSteps", () => {
  it("finds the largest subset within the zero/one budget", () => {
    expect(solve(["10", "0001", "111001", "1", "0"], 5, 3)).toBe(4);
    expect(solve(["10", "0", "1"], 1, 1)).toBe(2);
    expect(solve(["111", "1000", "1000", "1000"], 9, 3)).toBe(3);
    expect(solve([], 5, 5)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of onesZeroesSteps(["10", "0001", "111001", "1", "0"], 5, 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
