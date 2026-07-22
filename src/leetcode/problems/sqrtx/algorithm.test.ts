import { describe, it, expect } from "vitest";
import { sqrtSteps } from "./algorithm";
import { CODE } from "./code";

const sqrt = (x: number) => {
  const steps = sqrtSteps(x);
  return steps[steps.length - 1].data.ans;
};

describe("sqrtSteps", () => {
  it("computes the integer square root", () => {
    expect(sqrt(4)).toBe(2);
    expect(sqrt(8)).toBe(2);
    expect(sqrt(24)).toBe(4);
    expect(sqrt(0)).toBe(0);
    expect(sqrt(1)).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of sqrtSteps(24)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
