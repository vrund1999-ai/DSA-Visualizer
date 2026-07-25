import { describe, it, expect } from "vitest";
import { stonesSteps } from "./algorithm";
import { CODE } from "./code";

const removed = (stones: number[][]) => {
  const steps = stonesSteps(stones);
  return steps[steps.length - 1].data.answer;
};

describe("stonesSteps", () => {
  it("counts the maximum removable stones", () => {
    expect(removed([[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]])).toBe(5);
    expect(removed([[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]])).toBe(3);
    expect(removed([[0, 0]])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of stonesSteps([[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
