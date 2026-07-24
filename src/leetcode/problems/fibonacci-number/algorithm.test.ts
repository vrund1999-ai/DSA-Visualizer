import { describe, it, expect } from "vitest";
import { fibSteps } from "./algorithm";
import { CODE } from "./code";

const fib = (n: number) => {
  const steps = fibSteps(n);
  return steps[steps.length - 1].data.dp[n];
};

describe("fibSteps", () => {
  it("computes Fibonacci numbers", () => {
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
    expect(fib(9)).toBe(34);
    expect(fib(10)).toBe(55);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of fibSteps(9)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
