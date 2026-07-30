import { describe, it, expect } from "vitest";
import { fractionSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (num: number, den: number) => {
  const steps = fractionSteps(num, den);
  return steps[steps.length - 1].data.answer;
};

describe("fractionSteps", () => {
  it("formats fractions with repeating blocks", () => {
    expect(solve(1, 2)).toBe("0.5");
    expect(solve(2, 1)).toBe("2");
    expect(solve(4, 333)).toBe("0.(012)");
    expect(solve(1, 3)).toBe("0.(3)");
    expect(solve(-1, 6)).toBe("-0.1(6)");
    expect(solve(7, 12)).toBe("0.58(3)");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of fractionSteps(4, 333)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
