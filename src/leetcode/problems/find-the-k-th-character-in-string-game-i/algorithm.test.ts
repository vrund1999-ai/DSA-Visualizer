import { describe, it, expect } from "vitest";
import { kthCharSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (k: number) => {
  const steps = kthCharSteps(k);
  return steps[steps.length - 1].data.answer;
};

describe("kthCharSteps", () => {
  it("returns the k-th character of the grown word", () => {
    expect(solve(1)).toBe("a");
    expect(solve(5)).toBe("b");
    expect(solve(10)).toBe("c");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kthCharSteps(5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
