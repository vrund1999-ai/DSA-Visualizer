import { describe, it, expect } from "vitest";
import { flowersSteps } from "./algorithm";
import { CODE } from "./code";

const canPlace = (bed: number[], n: number) => {
  const steps = flowersSteps(bed, n);
  return steps[steps.length - 1].data.answer;
};

describe("flowersSteps", () => {
  it("determines if n flowers fit", () => {
    expect(canPlace([1, 0, 0, 0, 1], 1)).toBe(true);
    expect(canPlace([1, 0, 0, 0, 1], 2)).toBe(false);
    expect(canPlace([0, 0, 1, 0, 0], 1)).toBe(true);
    expect(canPlace([0], 1)).toBe(true);
    expect(canPlace([1, 0, 0, 0, 1, 0, 0], 2)).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of flowersSteps([1, 0, 0, 0, 1, 0, 0], 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
