import { describe, it, expect } from "vitest";
import { validParenSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string, locked: string) => {
  const steps = validParenSteps(s, locked);
  return steps[steps.length - 1].data.answer;
};

describe("validParenSteps", () => {
  it("checks whether the string can be made valid", () => {
    expect(solve("))()))", "010100")).toBe(true);
    expect(solve("()()", "0000")).toBe(true);
    expect(solve(")", "0")).toBe(false);
    expect(solve("(((())))", "11111111")).toBe(true);
    expect(solve(")(", "11")).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of validParenSteps("))()))", "010100")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
