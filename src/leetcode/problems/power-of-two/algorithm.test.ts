import { describe, it, expect } from "vitest";
import { powerOfTwoSteps } from "./algorithm";
import { CODE } from "./code";

const isPow = (n: number) => {
  const steps = powerOfTwoSteps(n);
  return steps[steps.length - 1].data.result;
};

describe("powerOfTwoSteps", () => {
  it("recognizes powers of two", () => {
    expect(isPow(1)).toBe(true);
    expect(isPow(16)).toBe(true);
    expect(isPow(64)).toBe(true);
  });

  it("rejects non-powers and non-positives", () => {
    expect(isPow(3)).toBe(false);
    expect(isPow(0)).toBe(false);
    expect(isPow(-4)).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of powerOfTwoSteps(16)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
