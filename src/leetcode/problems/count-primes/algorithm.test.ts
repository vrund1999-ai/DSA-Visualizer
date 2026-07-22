import { describe, it, expect } from "vitest";
import { countPrimesSteps } from "./algorithm";
import { CODE } from "./code";

const count = (n: number) => {
  const steps = countPrimesSteps(n);
  return steps[steps.length - 1].data.count;
};

describe("countPrimesSteps", () => {
  it("counts primes below n", () => {
    expect(count(10)).toBe(4);
    expect(count(30)).toBe(10);
    expect(count(2)).toBe(0);
    expect(count(0)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of countPrimesSteps(30)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
