import { describe, it, expect } from "vitest";
import { rottingSteps } from "./algorithm";
import { CODE } from "./code";

const rot = (grid: number[][]) => {
  const steps = rottingSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("rottingSteps", () => {
  it("computes minutes to rot all oranges", () => {
    expect(rot([[2, 1, 1], [1, 1, 0], [0, 1, 1]])).toBe(4);
    expect(rot([[0, 2]])).toBe(0);
  });

  it("returns -1 when a fresh orange is unreachable", () => {
    expect(rot([[2, 1, 1], [0, 1, 1], [1, 0, 1]])).toBe(-1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rottingSteps([[2, 1, 1], [1, 1, 0], [0, 1, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
