import { describe, it, expect } from "vitest";
import { tilingSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number) => {
  const steps = tilingSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("tilingSteps", () => {
  it("counts board tilings", () => {
    expect(solve(1)).toBe(1);
    expect(solve(2)).toBe(2);
    expect(solve(3)).toBe(5);
    expect(solve(4)).toBe(11);
    expect(solve(5)).toBe(24);
    expect(solve(30)).toBe(312342182);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of tilingSteps(5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
