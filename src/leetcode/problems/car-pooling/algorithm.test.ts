import { describe, it, expect } from "vitest";
import { carPoolingSteps, type Trip } from "./algorithm";
import { CODE } from "./code";

const canPool = (trips: Trip[], capacity: number) => {
  const steps = carPoolingSteps(trips, capacity);
  return steps[steps.length - 1].data.answer;
};

describe("carPoolingSteps", () => {
  it("checks capacity is never exceeded", () => {
    expect(canPool([[2, 1, 5], [3, 3, 7]], 4)).toBe(false);
    expect(canPool([[2, 1, 5], [3, 3, 7]], 5)).toBe(true);
    expect(canPool([[2, 1, 5], [3, 5, 7]], 3)).toBe(true);
    expect(canPool([[3, 2, 7], [3, 7, 9], [8, 3, 9]], 11)).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of carPoolingSteps([[2, 1, 5], [3, 3, 7]], 4)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
