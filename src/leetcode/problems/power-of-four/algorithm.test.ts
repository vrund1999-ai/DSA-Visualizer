import { describe, it, expect } from "vitest";
import { powerFourSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number) => {
  const steps = powerFourSteps(n);
  return steps[steps.length - 1].data.answer;
};

const ref = (n: number) => {
  if (n <= 0) return false;
  while (n % 4 === 0) n /= 4;
  return n === 1;
};

describe("powerFourSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve(16)).toBe(true);
    expect(solve(5)).toBe(false);
    expect(solve(1)).toBe(true);
    expect(solve(0)).toBe(false);
    expect(solve(8)).toBe(false); // power of 2, odd bit position
  });

  it("agrees with a divide-by-4 reference", () => {
    for (let n = -2; n <= 300; n++) expect(solve(n)).toBe(ref(n));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of powerFourSteps(16)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
