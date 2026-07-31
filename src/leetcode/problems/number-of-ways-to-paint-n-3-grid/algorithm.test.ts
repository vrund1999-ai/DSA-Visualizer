import { describe, it, expect } from "vitest";
import { paintGridSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number) => {
  const steps = paintGridSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("paintGridSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve(1)).toBe(12);
    expect(solve(2)).toBe(54);
    expect(solve(5000)).toBe(30228214);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of paintGridSteps(5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
