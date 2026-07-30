import { describe, it, expect } from "vitest";
import { validNumberSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string) => {
  const steps = validNumberSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("validNumberSteps", () => {
  it("accepts valid numbers", () => {
    for (const s of ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"]) {
      expect(solve(s)).toBe(true);
    }
  });

  it("rejects invalid numbers", () => {
    for (const s of ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53", ".", "", "e", ".e1", "+."]) {
      expect(solve(s)).toBe(false);
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of validNumberSteps("-53.5e+93")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
