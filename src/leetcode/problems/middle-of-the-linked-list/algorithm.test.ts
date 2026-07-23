import { describe, it, expect } from "vitest";
import { middleSteps } from "./algorithm";
import { CODE } from "./code";

const middle = (values: number[]) => {
  const steps = middleSteps(values);
  const { slow, values: v } = steps[steps.length - 1].data;
  return slow === null ? null : v[slow];
};

describe("middleSteps", () => {
  it("finds the middle node (second of two)", () => {
    expect(middle([1, 2, 3, 4, 5])).toBe(3);
    expect(middle([1, 2, 3, 4, 5, 6])).toBe(4);
    expect(middle([1])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of middleSteps([1, 2, 3, 4, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
