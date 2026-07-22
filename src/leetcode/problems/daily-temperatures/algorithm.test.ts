import { describe, it, expect } from "vitest";
import { dailyTempSteps } from "./algorithm";
import { CODE } from "./code";

const answer = (temps: number[]) => {
  const steps = dailyTempSteps(temps);
  return steps[steps.length - 1].data.res;
};

describe("dailyTempSteps", () => {
  it("computes days until warmer", () => {
    expect(answer([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
    expect(answer([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
    expect(answer([30, 60, 90])).toEqual([1, 1, 0]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of dailyTempSteps([73, 74, 75, 71, 69, 72, 76, 73])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
