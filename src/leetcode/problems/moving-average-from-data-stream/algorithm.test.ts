import { describe, it, expect } from "vitest";
import { movingAvgSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (size: number, values: number[]) => {
  const steps = movingAvgSteps(size, values);
  return steps[steps.length - 1].data.answers.filter((a): a is number => a !== null);
};

describe("movingAvgSteps", () => {
  it("matches the canonical example", () => {
    const res = solve(3, [1, 10, 3, 5]);
    expect(res[0]).toBeCloseTo(1, 5);
    expect(res[1]).toBeCloseTo(5.5, 5);
    expect(res[2]).toBeCloseTo(4.66667, 5);
    expect(res[3]).toBeCloseTo(6, 5);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of movingAvgSteps(3, [1, 10, 3, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
