import { describe, it, expect } from "vitest";
import { happySteps } from "./algorithm";
import { CODE } from "./code";

const isHappy = (n: number) => {
  const steps = happySteps(n);
  return steps[steps.length - 1].data.result;
};

describe("happySteps", () => {
  it("identifies happy numbers", () => {
    expect(isHappy(19)).toBe(true);
    expect(isHappy(1)).toBe(true);
    expect(isHappy(7)).toBe(true);
  });

  it("identifies unhappy numbers", () => {
    expect(isHappy(2)).toBe(false);
    expect(isHappy(4)).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of happySteps(19)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
