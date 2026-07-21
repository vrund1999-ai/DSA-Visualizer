import { describe, it, expect } from "vitest";
import { slidingSteps } from "./algorithm";
import { CODE } from "./code";

const best = (s: string) => {
  const steps = slidingSteps(s);
  return steps[steps.length - 1].data.best;
};

describe("slidingSteps", () => {
  it("finds the longest substring length", () => {
    expect(best("abcabcbb")).toBe(3);
    expect(best("bbbbb")).toBe(1);
    expect(best("pwwkew")).toBe(3);
  });

  it("handles the empty string", () => {
    expect(best("")).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of slidingSteps("abcabcbb")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
