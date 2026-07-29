import { describe, it, expect } from "vitest";
import { altitudeSteps } from "./algorithm";
import { CODE } from "./code";

const highest = (gain: number[]) => {
  const steps = altitudeSteps(gain);
  return steps[steps.length - 1].data.answer;
};

describe("altitudeSteps", () => {
  it("finds the highest altitude", () => {
    expect(highest([-5, 1, 5, 0, -7])).toBe(1);
    expect(highest([-4, -3, -2, -1, 4, 3, 2])).toBe(0);
    expect(highest([44, 32, -9, 52, 23, -50, 50, 33, -84, 47, -14, 48])).toBe(175);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of altitudeSteps([-5, 1, 5, 0, -7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
