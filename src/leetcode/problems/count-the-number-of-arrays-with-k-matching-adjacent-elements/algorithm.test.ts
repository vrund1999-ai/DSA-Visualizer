import { describe, it, expect } from "vitest";
import { matchingSteps } from "./algorithm";
import { CODE } from "./code";

const count = (n: number, m: number, k: number) => {
  const steps = matchingSteps(n, m, k);
  return steps[steps.length - 1].data.answer;
};

describe("matchingSteps", () => {
  it("counts arrays with exactly k matching adjacent pairs", () => {
    expect(count(3, 2, 1)).toBe(4);
    expect(count(4, 2, 2)).toBe(6);
    expect(count(5, 2, 0)).toBe(2);
    expect(count(5, 2, 3)).toBe(8);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of matchingSteps(5, 2, 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
