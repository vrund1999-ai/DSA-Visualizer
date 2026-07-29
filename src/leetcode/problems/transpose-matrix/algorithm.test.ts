import { describe, it, expect } from "vitest";
import { transposeSteps } from "./algorithm";
import { CODE } from "./code";

const transpose = (m: number[][]) => {
  const steps = transposeSteps(m);
  return steps[steps.length - 1].data.answer;
};

describe("transposeSteps", () => {
  it("transposes matrices", () => {
    expect(transpose([[1, 2, 3], [4, 5, 6]])).toEqual([[1, 4], [2, 5], [3, 6]]);
    expect(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
    expect(transpose([[5]])).toEqual([[5]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of transposeSteps([[1, 2, 3], [4, 5, 6]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
