import { describe, it, expect } from "vitest";
import { guessNumberSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number) => {
  const steps = guessNumberSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("guessNumberSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve(10)).toBe(16);
    expect(solve(1)).toBe(0);
    expect(solve(2)).toBe(1);
    expect(solve(7)).toBe(10);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of guessNumberSteps(7)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
