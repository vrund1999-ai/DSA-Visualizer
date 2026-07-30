import { describe, it, expect } from "vitest";
import { knightSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number) => {
  const steps = knightSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("knightSteps", () => {
  it("counts distinct knight-dialer numbers", () => {
    expect(solve(1)).toBe(10);
    expect(solve(2)).toBe(20);
    expect(solve(3)).toBe(46);
    expect(solve(4)).toBe(104);
    expect(solve(3131)).toBe(136006598);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of knightSteps(3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
