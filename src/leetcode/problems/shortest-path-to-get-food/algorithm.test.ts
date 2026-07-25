import { describe, it, expect } from "vitest";
import { foodPathSteps } from "./algorithm";
import { CODE } from "./code";

const shortest = (grid: string[][]) => {
  const steps = foodPathSteps(grid);
  return steps[steps.length - 1].data.answer;
};

describe("foodPathSteps", () => {
  it("finds the nearest food distance", () => {
    expect(shortest([
      ["X", "X", "X", "X", "X", "X"],
      ["X", "*", "O", "O", "O", "X"],
      ["X", "O", "O", "#", "O", "X"],
      ["X", "X", "X", "X", "X", "X"],
    ])).toBe(3);
    expect(shortest([
      ["X", "X", "X", "X", "X"],
      ["X", "*", "X", "O", "X"],
      ["X", "O", "X", "#", "X"],
      ["X", "X", "X", "X", "X"],
    ])).toBe(-1);
    expect(shortest([["*", "#"]])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of foodPathSteps([["*", "O", "#"]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
