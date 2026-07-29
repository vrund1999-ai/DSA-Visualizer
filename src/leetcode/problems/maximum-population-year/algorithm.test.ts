import { describe, it, expect } from "vitest";
import { populationSteps } from "./algorithm";
import { CODE } from "./code";

const peakYear = (logs: number[][]) => {
  const steps = populationSteps(logs);
  return steps[steps.length - 1].data.answer;
};

describe("populationSteps", () => {
  it("finds the earliest peak-population year", () => {
    expect(peakYear([[1993, 1999], [2000, 2010]])).toBe(1993);
    expect(peakYear([[1950, 1961], [1960, 1971], [1970, 1981]])).toBe(1960);
    expect(peakYear([[2008, 2026], [2004, 2008], [2034, 2035]])).toBe(2004);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of populationSteps([[1993, 1999], [2000, 2010], [1950, 1961], [1960, 1971]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
