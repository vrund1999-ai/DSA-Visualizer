import { describe, it, expect } from "vitest";
import { busSteps } from "./algorithm";
import { CODE } from "./code";

const buses = (routes: number[][], source: number, target: number) => {
  const steps = busSteps(routes, source, target);
  return steps[steps.length - 1].data.answer;
};

describe("busSteps", () => {
  it("finds the fewest buses to the target", () => {
    expect(buses([[1, 2, 7], [3, 6, 7]], 1, 6)).toBe(2);
    expect(buses([[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], 15, 12)).toBe(-1);
    expect(buses([[1, 2, 7], [3, 6, 7]], 1, 1)).toBe(0);
    expect(buses([[1, 2, 7]], 1, 7)).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of busSteps([[1, 2, 7], [3, 6, 7]], 1, 6)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
