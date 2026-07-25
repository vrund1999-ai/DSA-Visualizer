import { describe, it, expect } from "vitest";
import { calcSteps } from "./algorithm";
import { CODE } from "./code";

const calc = (s: string) => {
  const steps = calcSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("calcSteps", () => {
  it("evaluates with precedence", () => {
    expect(calc("3+2*2")).toBe(7);
    expect(calc(" 3/2 ")).toBe(1);
    expect(calc(" 3+5 / 2 ")).toBe(5);
    expect(calc("3+2*2-6/2")).toBe(4);
    expect(calc("14-3/2")).toBe(13);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of calcSteps("3+2*2-6/2")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
