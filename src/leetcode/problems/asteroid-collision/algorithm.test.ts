import { describe, it, expect } from "vitest";
import { asteroidSteps } from "./algorithm";
import { CODE } from "./code";

const survivors = (asteroids: number[]) => {
  const steps = asteroidSteps(asteroids);
  return steps[steps.length - 1].data.stack;
};

describe("asteroidSteps", () => {
  it("resolves collisions", () => {
    expect(survivors([5, 10, -5])).toEqual([5, 10]);
    expect(survivors([8, -8])).toEqual([]);
    expect(survivors([10, 2, -5])).toEqual([10]);
    expect(survivors([-2, -1, 1, 2])).toEqual([-2, -1, 1, 2]);
    expect(survivors([5, 10, -5, -12, 8, -8, 3])).toEqual([-12, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of asteroidSteps([5, 10, -5, -12, 8, -8, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
