import { describe, it, expect } from "vitest";
import { genParenSteps } from "./algorithm";
import { CODE } from "./code";

const gen = (n: number) => {
  const steps = genParenSteps(n);
  return steps[steps.length - 1].data.results;
};

describe("genParenSteps", () => {
  it("generates all well-formed combinations", () => {
    expect(gen(1)).toEqual(["()"]);
    expect(gen(3)).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"]);
  });

  it("produces the Catalan number of results", () => {
    expect(gen(4)).toHaveLength(14);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of genParenSteps(3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
