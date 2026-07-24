import { describe, it, expect } from "vitest";
import { hIndexSteps } from "./algorithm";
import { CODE } from "./code";

const h = (c: number[]) => {
  const steps = hIndexSteps(c);
  return steps[steps.length - 1].data.answer;
};

describe("hIndexSteps", () => {
  it("computes the h-index", () => {
    expect(h([3, 0, 6, 1, 5])).toBe(3);
    expect(h([1, 3, 1])).toBe(1);
    expect(h([0, 0, 0])).toBe(0);
    expect(h([100])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of hIndexSteps([3, 0, 6, 1, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
