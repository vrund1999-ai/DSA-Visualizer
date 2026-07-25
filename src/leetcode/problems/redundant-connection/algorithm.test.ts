import { describe, it, expect } from "vitest";
import { redundantSteps } from "./algorithm";
import { CODE } from "./code";

const redundant = (edges: [number, number][]) => {
  const steps = redundantSteps(edges);
  return steps[steps.length - 1].data.answer;
};

describe("redundantSteps", () => {
  it("finds the cycle-closing edge", () => {
    expect(redundant([[1, 2], [1, 3], [2, 3]])).toEqual([2, 3]);
    expect(redundant([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]])).toEqual([1, 4]);
    expect(redundant([[1, 2], [2, 3], [1, 3]])).toEqual([1, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of redundantSteps([[1, 2], [1, 3], [2, 3]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
