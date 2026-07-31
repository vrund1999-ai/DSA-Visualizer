import { describe, it, expect } from "vitest";
import { beautifulArrSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number) => {
  const steps = beautifulArrSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("beautifulArrSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve(1)).toBe(1);
    expect(solve(2)).toBe(2);
    expect(solve(3)).toBe(3);
    expect(solve(4)).toBe(8);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of beautifulArrSteps(4)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
