import { describe, it, expect } from "vitest";
import { rpnSteps } from "./algorithm";
import { CODE } from "./code";

const evalRPN = (tokens: string[]) => {
  const steps = rpnSteps(tokens);
  return steps[steps.length - 1].data.result;
};

describe("rpnSteps", () => {
  it("evaluates postfix expressions", () => {
    expect(evalRPN(["2", "1", "+", "3", "*"])).toBe(9);
    expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6);
    expect(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])).toBe(22);
    expect(evalRPN(["3", "-4", "*"])).toBe(-12);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rpnSteps(["2", "1", "+", "3", "*"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
