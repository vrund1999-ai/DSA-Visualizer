import { describe, it, expect } from "vitest";
import { largeIslandSteps } from "./algorithm";
import { CODE } from "./code";

const largest = (grid: number[][]) => {
  const steps = largeIslandSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("largeIslandSteps", () => {
  it("returns the largest island after flipping one 0", () => {
    expect(largest([[1, 0], [0, 1]])).toBe(3);
    expect(largest([[1, 1], [1, 0]])).toBe(4);
    expect(largest([[1, 1], [1, 1]])).toBe(4);
    expect(largest([[1, 1, 0, 0, 0], [1, 0, 0, 1, 1], [0, 0, 1, 1, 0], [0, 1, 0, 0, 1]])).toBe(6);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of largeIslandSteps([[1, 0], [0, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
