import { describe, it, expect } from "vitest";
import { circularGameSteps } from "./algorithm";
import { CODE } from "./code";

const winner = (n: number, k: number) => {
  const steps = circularGameSteps(n, k);
  return steps[steps.length - 1].data.circle[0];
};

describe("circularGameSteps", () => {
  it("returns the last player remaining", () => {
    expect(winner(5, 2)).toBe(3);
    expect(winner(6, 5)).toBe(1);
    expect(winner(6, 3)).toBe(1);
    expect(winner(1, 1)).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of circularGameSteps(6, 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
