import { describe, it, expect } from "vitest";
import { climbSteps } from "./algorithm";
import { CODE } from "./code";

const ways = (n: number) => {
  const steps = climbSteps(n);
  return steps[steps.length - 1].data.dp[n];
};

describe("climbSteps", () => {
  it("counts distinct ways (Fibonacci)", () => {
    expect(ways(2)).toBe(2);
    expect(ways(3)).toBe(3);
    expect(ways(6)).toBe(13);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of climbSteps(6)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
