import { describe, it, expect } from "vitest";
import { secretSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number, delay: number, forget: number) => {
  const steps = secretSteps(n, delay, forget);
  return steps[steps.length - 1].data.answer;
};

describe("secretSteps", () => {
  it("counts people aware of the secret", () => {
    expect(solve(6, 2, 4)).toBe(5);
    expect(solve(4, 1, 3)).toBe(6);
    expect(solve(2, 1, 2)).toBe(2);
    expect(solve(1, 1, 1)).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of secretSteps(6, 2, 4)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
