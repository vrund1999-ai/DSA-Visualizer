import { describe, it, expect } from "vitest";
import { maximalRectSteps } from "./algorithm";
import { CODE } from "./code";

const maxRect = (matrix: string[][]) => {
  const steps = maximalRectSteps(matrix);
  return steps[steps.length - 1].data.answer;
};

describe("maximalRectSteps", () => {
  it("finds the largest all-ones rectangle", () => {
    expect(maxRect([
      ["1", "0", "1", "0", "0"],
      ["1", "0", "1", "1", "1"],
      ["1", "1", "1", "1", "1"],
      ["1", "0", "0", "1", "0"],
    ])).toBe(6);
    expect(maxRect([["0"]])).toBe(0);
    expect(maxRect([["1"]])).toBe(1);
    expect(maxRect([["1", "1"], ["1", "1"]])).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maximalRectSteps([["1", "0"], ["1", "1"]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
