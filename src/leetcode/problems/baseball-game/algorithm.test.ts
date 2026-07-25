import { describe, it, expect } from "vitest";
import { baseballSteps } from "./algorithm";
import { CODE } from "./code";

const calc = (ops: string[]) => {
  const steps = baseballSteps(ops);
  return steps[steps.length - 1].data.answer;
};

describe("baseballSteps", () => {
  it("evaluates the score record", () => {
    expect(calc(["5", "2", "C", "D", "+"])).toBe(30);
    expect(calc(["5", "-2", "4", "C", "D", "9", "+", "+"])).toBe(27);
    expect(calc(["1", "C"])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of baseballSteps(["5", "2", "C", "D", "+"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
