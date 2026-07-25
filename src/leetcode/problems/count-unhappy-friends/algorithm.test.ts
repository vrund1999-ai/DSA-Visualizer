import { describe, it, expect } from "vitest";
import { unhappySteps } from "./algorithm";
import { CODE } from "./code";

const unhappy = (n: number, preferences: number[][], pairs: number[][]) => {
  const steps = unhappySteps(n, preferences, pairs);
  return steps[steps.length - 1].data.answer;
};

describe("unhappySteps", () => {
  it("counts unhappy friends", () => {
    expect(
      unhappy(4, [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], [[0, 1], [2, 3]]),
    ).toBe(2);
    expect(unhappy(2, [[1], [0]], [[1, 0]])).toBe(0);
    expect(
      unhappy(4, [[1, 3, 2], [2, 3, 0], [1, 3, 0], [0, 2, 1]], [[1, 3], [0, 2]]),
    ).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of unhappySteps(4, [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], [[0, 1], [2, 3]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
