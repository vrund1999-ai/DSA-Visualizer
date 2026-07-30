import { describe, it, expect } from "vitest";
import { sumPowersSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number, x: number) => {
  const steps = sumPowersSteps(n, x);
  return steps[steps.length - 1].data.answer;
};

describe("sumPowersSteps", () => {
  it("counts distinct-power decompositions", () => {
    expect(solve(10, 2)).toBe(1); // 3² + 1²
    expect(solve(4, 1)).toBe(2); // 4, 3+1
    expect(solve(160, 3)).toBe(1); // 2³ + 3³ + 5³
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of sumPowersSteps(10, 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
