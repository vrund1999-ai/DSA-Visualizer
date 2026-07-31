import { describe, it, expect } from "vitest";
import { maxDiffChangeSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (num: number) => {
  const steps = maxDiffChangeSteps(num);
  return steps[steps.length - 1].data.answer;
};

describe("maxDiffChangeSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve(555)).toBe(888);
    expect(solve(9)).toBe(8);
    expect(solve(123456)).toBe(820000);
    expect(solve(1000)).toBe(8000); // max 9000, min 1000

  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxDiffChangeSteps(555)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
