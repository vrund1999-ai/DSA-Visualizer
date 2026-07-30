import { describe, it, expect } from "vitest";
import { powersThreeSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number) => {
  const steps = powersThreeSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("powersThreeSteps", () => {
  it("checks sum-of-distinct-powers-of-three", () => {
    expect(solve(12)).toBe(true); // 9 + 3
    expect(solve(91)).toBe(true); // 81 + 9 + 1
    expect(solve(21)).toBe(false); // base-3 210
    expect(solve(1)).toBe(true);
    expect(solve(2)).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of powersThreeSteps(91)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
