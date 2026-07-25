import { describe, it, expect } from "vitest";
import { basicCalcSteps } from "./algorithm";
import { CODE } from "./code";

const calc = (s: string) => {
  const steps = basicCalcSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("basicCalcSteps", () => {
  it("evaluates with parentheses", () => {
    expect(calc("1 + 1")).toBe(2);
    expect(calc(" 2-1 + 2 ")).toBe(3);
    expect(calc("(1+(4+5+2)-3)+(6+8)")).toBe(23);
    expect(calc("-(3+2)")).toBe(-5);
    expect(calc("2-(5-6)")).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of basicCalcSteps("(1+(4+5+2)-3)+(6+8)")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
