import { describe, it, expect } from "vitest";
import { flightsSteps, type Flight } from "./algorithm";
import { CODE } from "./code";

const cheapest = (n: number, flights: Flight[], src: number, dst: number, k: number) => {
  const steps = flightsSteps(n, flights, src, dst, k);
  return steps[steps.length - 1].data.answer;
};

describe("flightsSteps", () => {
  it("finds the cheapest price within k stops", () => {
    const f: Flight[] = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]];
    expect(cheapest(4, f, 0, 3, 1)).toBe(700);
    const g: Flight[] = [[0, 1, 100], [1, 2, 100], [0, 2, 500]];
    expect(cheapest(3, g, 0, 2, 1)).toBe(200);
    expect(cheapest(3, g, 0, 2, 0)).toBe(500);
    expect(cheapest(3, [[0, 1, 5]], 0, 2, 5)).toBe(-1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    const f: Flight[] = [[0, 1, 100], [1, 2, 100], [2, 3, 200], [1, 3, 600]];
    for (const s of flightsSteps(4, f, 0, 3, 1)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
