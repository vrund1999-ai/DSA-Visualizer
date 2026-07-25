import { describe, it, expect } from "vitest";
import { nqueensSteps } from "./algorithm";
import { CODE } from "./code";

const solutions = (n: number) => {
  const steps = nqueensSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("nqueensSteps", () => {
  it("counts the N-Queens solutions", () => {
    expect(solutions(1)).toBe(1);
    expect(solutions(4)).toBe(2);
    expect(solutions(5)).toBe(10);
    expect(solutions(6)).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of nqueensSteps(6)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
