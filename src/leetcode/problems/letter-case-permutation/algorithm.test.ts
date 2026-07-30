import { describe, it, expect } from "vitest";
import { letterCaseSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string) => {
  const steps = letterCaseSteps(s);
  return new Set(steps[steps.length - 1].data.answer);
};

describe("letterCaseSteps", () => {
  it("generates all letter-case permutations", () => {
    expect(solve("a1b2")).toEqual(new Set(["a1b2", "a1B2", "A1b2", "A1B2"]));
    expect(solve("3z4")).toEqual(new Set(["3z4", "3Z4"]));
    expect(solve("12345")).toEqual(new Set(["12345"]));
    expect(solve("C")).toEqual(new Set(["c", "C"]));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of letterCaseSteps("a1b2")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
