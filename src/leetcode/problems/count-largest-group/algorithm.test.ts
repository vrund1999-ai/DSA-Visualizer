import { describe, it, expect } from "vitest";
import { largestGroupSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number) => {
  const steps = largestGroupSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("largestGroupSteps", () => {
  it("counts the groups tied for the largest size", () => {
    expect(solve(13)).toBe(4);
    expect(solve(2)).toBe(2);
    expect(solve(15)).toBe(6);
    expect(solve(24)).toBe(5);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of largestGroupSteps(13)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
