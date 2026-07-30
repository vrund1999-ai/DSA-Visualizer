import { describe, it, expect } from "vitest";
import { twoKeysSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number) => {
  const steps = twoKeysSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("twoKeysSteps", () => {
  it("computes the minimum operations", () => {
    expect(solve(1)).toBe(0);
    expect(solve(3)).toBe(3);
    expect(solve(9)).toBe(6);
    expect(solve(12)).toBe(7);
    expect(solve(19)).toBe(19);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of twoKeysSteps(12)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
