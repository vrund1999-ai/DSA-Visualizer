import { describe, it, expect } from "vitest";
import { refuelSteps } from "./algorithm";
import { CODE } from "./code";

const minStops = (target: number, startFuel: number, stations: number[][]) => {
  const steps = refuelSteps(target, startFuel, stations);
  return steps[steps.length - 1].data.answer;
};

describe("refuelSteps", () => {
  it("finds the minimum refueling stops", () => {
    expect(minStops(1, 1, [])).toBe(0);
    expect(minStops(100, 1, [[10, 100]])).toBe(-1);
    expect(minStops(100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]])).toBe(2);
    expect(minStops(1000, 299, [[13, 21], [26, 115], [100, 47], [225, 99], [299, 141], [444, 198], [608, 190], [636, 157], [647, 255], [841, 123]])).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of refuelSteps(100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
