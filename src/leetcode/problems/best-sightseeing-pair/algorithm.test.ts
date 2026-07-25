import { describe, it, expect } from "vitest";
import { sightseeingSteps } from "./algorithm";
import { CODE } from "./code";

const best = (values: number[]) => {
  const steps = sightseeingSteps(values);
  return steps[steps.length - 1].data.answer;
};

describe("sightseeingSteps", () => {
  it("finds the maximum sightseeing-pair score", () => {
    expect(best([8, 1, 5, 2, 6])).toBe(11);
    expect(best([1, 2])).toBe(2);
    expect(best([2, 2, 2])).toBe(3);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of sightseeingSteps([8, 1, 5, 2, 6])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
