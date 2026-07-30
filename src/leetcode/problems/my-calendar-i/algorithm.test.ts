import { describe, it, expect } from "vitest";
import { calendarSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (ops: [number, number][]) => {
  const steps = calendarSteps(ops);
  return steps[steps.length - 1].data.answers;
};

describe("calendarSteps", () => {
  it("matches the canonical example", () => {
    expect(solve([[10, 20], [15, 25], [20, 30]])).toEqual([true, false, true]);
  });

  it("allows touching intervals (half-open)", () => {
    expect(solve([[10, 20], [20, 30]])).toEqual([true, true]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of calendarSteps([[10, 20], [15, 25], [20, 30]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
