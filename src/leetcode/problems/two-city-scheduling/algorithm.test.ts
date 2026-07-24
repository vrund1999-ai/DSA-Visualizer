import { describe, it, expect } from "vitest";
import { twoCitySteps } from "./algorithm";
import { CODE } from "./code";

const cost = (costs: [number, number][]) => {
  const steps = twoCitySteps(costs);
  return steps[steps.length - 1].data.total;
};

describe("twoCitySteps", () => {
  it("minimizes the total flight cost", () => {
    expect(cost([[10, 20], [30, 200], [400, 50], [30, 20]])).toBe(110);
    expect(cost([[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]])).toBe(1859);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of twoCitySteps([[10, 20], [30, 200], [400, 50], [30, 20]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
