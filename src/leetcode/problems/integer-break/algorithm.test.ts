import { describe, it, expect } from "vitest";
import { intBreakSteps } from "./algorithm";
import { CODE } from "./code";

const maxProduct = (n: number) => {
  const steps = intBreakSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("intBreakSteps", () => {
  it("maximizes the product of parts", () => {
    expect(maxProduct(2)).toBe(1);
    expect(maxProduct(10)).toBe(36);
    expect(maxProduct(8)).toBe(18);
    expect(maxProduct(4)).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of intBreakSteps(10)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
