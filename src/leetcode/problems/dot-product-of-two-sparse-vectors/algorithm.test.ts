import { describe, it, expect } from "vitest";
import { sparseDotSteps } from "./algorithm";
import { CODE } from "./code";

const dot = (a: number[], b: number[]) => {
  const steps = sparseDotSteps(a, b);
  return steps[steps.length - 1].data.answer;
};

describe("sparseDotSteps", () => {
  it("computes the dot product", () => {
    expect(dot([1, 0, 0, 2, 3], [0, 3, 0, 4, 0])).toBe(8);
    expect(dot([0, 1, 0, 0, 0], [0, 0, 0, 0, 2])).toBe(0);
    expect(dot([0, 1, 0, 0, 2, 0, 0], [1, 0, 0, 0, 3, 0, 4])).toBe(6);
    expect(dot([1, 2, 3], [4, 5, 6])).toBe(32);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of sparseDotSteps([1, 0, 0, 2, 3], [0, 3, 0, 4, 0])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
