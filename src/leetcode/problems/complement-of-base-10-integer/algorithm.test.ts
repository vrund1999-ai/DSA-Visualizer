import { describe, it, expect } from "vitest";
import { complementSteps } from "./algorithm";
import { CODE } from "./code";

const complement = (n: number) => {
  const steps = complementSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("complementSteps", () => {
  it("flips the bits within the number's width", () => {
    expect(complement(5)).toBe(2);
    expect(complement(7)).toBe(0);
    expect(complement(10)).toBe(5);
    expect(complement(0)).toBe(1);
    expect(complement(1)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of complementSteps(5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
