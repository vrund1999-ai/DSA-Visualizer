import { describe, it, expect } from "vitest";
import { passRatioSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (classes: [number, number][], extra: number) => {
  const steps = passRatioSteps(classes, extra);
  return steps[steps.length - 1].data.answer!;
};

describe("passRatioSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve([[1, 2], [3, 5], [2, 2]], 2)).toBeCloseTo(0.78333, 5);
    expect(solve([[2, 4], [3, 9], [4, 5], [2, 10]], 4)).toBeCloseTo(0.53485, 5);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of passRatioSteps([[1, 2], [3, 5], [2, 2]], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
