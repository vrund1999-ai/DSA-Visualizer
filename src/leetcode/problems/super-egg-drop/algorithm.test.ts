import { describe, it, expect } from "vitest";
import { eggDropSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (k: number, n: number) => {
  const steps = eggDropSteps(k, n);
  return steps[steps.length - 1].data.answer;
};

describe("eggDropSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve(1, 2)).toBe(2);
    expect(solve(2, 6)).toBe(3);
    expect(solve(3, 14)).toBe(4);
    expect(solve(2, 100)).toBe(14);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of eggDropSteps(2, 6)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
