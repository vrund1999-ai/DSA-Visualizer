import { describe, it, expect } from "vitest";
import { heatersSteps } from "./algorithm";
import { CODE } from "./code";

const radius = (houses: number[], heaters: number[]) => {
  const steps = heatersSteps(houses, heaters);
  return steps[steps.length - 1].data.answer;
};

describe("heatersSteps", () => {
  it("computes the minimum radius", () => {
    expect(radius([1, 2, 3], [2])).toBe(1);
    expect(radius([1, 2, 3, 4], [1, 4])).toBe(1);
    expect(radius([1, 5], [2])).toBe(3);
    expect(radius([1, 2, 3, 5, 15], [2, 30])).toBe(13);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of heatersSteps([1, 2, 3, 4], [1, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
