import { describe, it, expect } from "vitest";
import { uglySteps } from "./algorithm";
import { CODE } from "./code";

const isUgly = (n: number) => {
  const steps = uglySteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("uglySteps", () => {
  it("detects ugly numbers", () => {
    expect(isUgly(6)).toBe(true);
    expect(isUgly(1)).toBe(true);
    expect(isUgly(14)).toBe(false);
    expect(isUgly(30)).toBe(true);
    expect(isUgly(0)).toBe(false);
    expect(isUgly(-6)).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of uglySteps(30)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
