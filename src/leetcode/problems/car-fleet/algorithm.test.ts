import { describe, it, expect } from "vitest";
import { carFleetSteps } from "./algorithm";
import { CODE } from "./code";

const fleets = (target: number, position: number[], speed: number[]) => {
  const steps = carFleetSteps(target, position, speed);
  return steps[steps.length - 1].data.answer;
};

describe("carFleetSteps", () => {
  it("counts the number of car fleets", () => {
    expect(fleets(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toBe(3);
    expect(fleets(10, [3], [3])).toBe(1);
    expect(fleets(100, [0, 2, 4], [4, 2, 1])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of carFleetSteps(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
