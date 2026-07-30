import { describe, it, expect } from "vitest";
import { alternatingSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (colors: number[], k: number) => {
  const steps = alternatingSteps(colors, k);
  return steps[steps.length - 1].data.answer;
};

describe("alternatingSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([0, 1, 0, 1, 0], 3)).toBe(3);
    expect(solve([0, 1, 0, 0, 1, 0, 1], 6)).toBe(2);
    expect(solve([1, 1, 0, 1], 4)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of alternatingSteps([0, 1, 0, 1, 0], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
