import { describe, it, expect } from "vitest";
import { happySteps } from "./algorithm";
import { CODE } from "./code";

const solve = (a: number, b: number, c: number) => {
  const steps = happySteps(a, b, c);
  return steps[steps.length - 1].data.answer!;
};

const valid = (s: string, a: number, b: number, c: number) => {
  if (/aaa|bbb|ccc/.test(s)) return false;
  const count = (ch: string) => s.split("").filter((x) => x === ch).length;
  return count("a") <= a && count("b") <= b && count("c") <= c;
};

describe("happySteps", () => {
  it("builds a valid happy string of maximal length", () => {
    expect(valid(solve(1, 1, 7), 1, 1, 7)).toBe(true);
    expect(solve(1, 1, 7).length).toBe(8);
    expect(valid(solve(2, 2, 1), 2, 2, 1)).toBe(true);
    expect(solve(7, 1, 0).length).toBe(5); // "aabaa"
    expect(solve(0, 0, 0)).toBe("");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of happySteps(1, 1, 7)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
