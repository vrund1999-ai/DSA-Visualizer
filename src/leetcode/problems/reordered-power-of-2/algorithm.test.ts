import { describe, it, expect } from "vitest";
import { reorderedSteps } from "./algorithm";
import { CODE } from "./code";

const reordered = (n: number) => {
  const steps = reorderedSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("reorderedSteps", () => {
  it("checks reorderability to a power of 2", () => {
    expect(reordered(1)).toBe(true);
    expect(reordered(10)).toBe(false);
    expect(reordered(16)).toBe(true);
    expect(reordered(24)).toBe(false);
    expect(reordered(46)).toBe(true); // 64 = 2^6
    expect(reordered(821)).toBe(true); // 128 = 2^7
    expect(reordered(823)).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of reorderedSteps(46)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
