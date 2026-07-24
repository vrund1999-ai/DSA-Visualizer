import { describe, it, expect } from "vitest";
import { nextGreaterIIISteps } from "./algorithm";
import { CODE } from "./code";

const next = (n: number) => {
  const steps = nextGreaterIIISteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("nextGreaterIIISteps", () => {
  it("computes the next greater number with the same digits", () => {
    expect(next(12)).toBe(21);
    expect(next(21)).toBe(-1);
    expect(next(12443322)).toBe(13222344);
    expect(next(1999999999)).toBe(9199999999 > 2 ** 31 - 1 ? -1 : 9199999999);
    expect(next(230241)).toBe(230412);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of nextGreaterIIISteps(12443322)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
