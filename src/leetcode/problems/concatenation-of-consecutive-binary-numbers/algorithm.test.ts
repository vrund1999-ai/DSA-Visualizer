import { describe, it, expect } from "vitest";
import { concatBinarySteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number) => {
  const steps = concatBinarySteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("concatBinarySteps", () => {
  it("matches the canonical examples", () => {
    expect(solve(1)).toBe(1);
    expect(solve(3)).toBe(27); // "1" + "10" + "11" = 11011 = 27
    expect(solve(12)).toBe(505379714);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of concatBinarySteps(5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
