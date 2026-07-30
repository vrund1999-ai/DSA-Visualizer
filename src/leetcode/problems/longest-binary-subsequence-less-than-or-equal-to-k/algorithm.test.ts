import { describe, it, expect } from "vitest";
import { binSubSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string, k: number) => {
  const steps = binSubSteps(s, k);
  return steps[steps.length - 1].data.answer;
};

describe("binSubSteps", () => {
  it("finds the longest subsequence with value <= k", () => {
    expect(solve("1001010", 5)).toBe(5);
    expect(solve("00101001", 1)).toBe(6);
    expect(solve("1", 1)).toBe(1);
    expect(solve("1", 0)).toBe(0);
    expect(solve("0000", 0)).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of binSubSteps("1001010", 5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
