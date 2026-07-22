import { describe, it, expect } from "vitest";
import { diameterSteps } from "./algorithm";
import { CODE } from "./code";

const diameter = (heap: (number | null)[]) => {
  const steps = diameterSteps(heap);
  return steps[steps.length - 1].data.best;
};

describe("diameterSteps", () => {
  it("computes the diameter in edges", () => {
    expect(diameter([1, 2, 3, 4, 5])).toBe(3);
    expect(diameter([1, 2])).toBe(1);
    expect(diameter([1])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of diameterSteps([1, 2, 3, 4, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
