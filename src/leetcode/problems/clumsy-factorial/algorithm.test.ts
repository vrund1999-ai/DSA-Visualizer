import { describe, it, expect } from "vitest";
import { clumsySteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number) => {
  const steps = clumsySteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("clumsySteps", () => {
  it("matches the canonical examples", () => {
    expect(solve(4)).toBe(7);
    expect(solve(10)).toBe(12);
    expect(solve(1)).toBe(1);
    expect(solve(3)).toBe(6);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of clumsySteps(10)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
