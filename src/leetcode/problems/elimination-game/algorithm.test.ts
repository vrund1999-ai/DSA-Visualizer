import { describe, it, expect } from "vitest";
import { eliminationSteps } from "./algorithm";
import { CODE } from "./code";

const last = (n: number) => {
  const steps = eliminationSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("eliminationSteps", () => {
  it("returns the last remaining number", () => {
    expect(last(9)).toBe(6);
    expect(last(1)).toBe(1);
    expect(last(2)).toBe(2);
    expect(last(4)).toBe(2);
    expect(last(10)).toBe(8);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of eliminationSteps(9)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
