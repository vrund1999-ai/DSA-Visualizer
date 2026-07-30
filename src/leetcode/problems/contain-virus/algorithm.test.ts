import { describe, it, expect } from "vitest";
import { containVirusSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (grid: number[][]) => {
  const steps = containVirusSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("containVirusSteps", () => {
  it("matches the canonical examples", () => {
    expect(
      solve([
        [0, 1, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ]),
    ).toBe(10);
    expect(solve([[1, 1, 1], [1, 0, 1], [1, 1, 1]])).toBe(4);
    expect(
      solve([
        [1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0],
      ]),
    ).toBe(13);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    const steps = containVirusSteps([
      [0, 1, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ]);
    for (const s of steps) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
