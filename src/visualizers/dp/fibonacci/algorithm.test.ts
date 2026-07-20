import { describe, it, expect } from "vitest";
import { fibonacciSteps } from "./algorithm";
import { FIBONACCI_CODE } from "./code";

const fib = (n: number): number => {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) [a, b] = [b, a + b];
  return a;
};

describe("fibonacciSteps", () => {
  it("computes the correct final value", () => {
    for (const n of [2, 5, 10, 15]) {
      const steps = fibonacciSteps(n);
      const last = steps[steps.length - 1];
      expect(last.data.cells[0][n]).toBe(fib(n));
    }
  });

  it("marks the answer cell as target in the final step", () => {
    const steps = fibonacciSteps(10);
    const last = steps[steps.length - 1];
    expect(last.highlights.some((h) => h.role === "target")).toBe(true);
  });

  it("never computes with a null dependency", () => {
    // Whenever dp[i] is written, dp[i-1] and dp[i-2] must already be numbers.
    const steps = fibonacciSteps(10);
    for (const s of steps) {
      for (const [c, v] of s.data.cells[0].entries()) {
        if (v !== null && c >= 2) {
          expect(s.data.cells[0][c - 1]).not.toBeNull();
          expect(s.data.cells[0][c - 2]).not.toBeNull();
        }
      }
    }
  });

  it("every step's line index is within the code bounds", () => {
    for (const s of fibonacciSteps(10)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(FIBONACCI_CODE.length);
    }
  });

  it("is deterministic (pure)", () => {
    expect(fibonacciSteps(12)).toEqual(fibonacciSteps(12));
  });
});
