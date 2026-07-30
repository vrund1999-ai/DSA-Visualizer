import { describe, it, expect } from "vitest";
import { removeDigitSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (number: string, digit: string) => {
  const steps = removeDigitSteps(number, digit);
  return steps[steps.length - 1].data.answer;
};

describe("removeDigitSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve("123", "3")).toBe("12");
    expect(solve("1231", "1")).toBe("231");
    expect(solve("551", "5")).toBe("51");
    expect(solve("123", "1")).toBe("23");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of removeDigitSteps("1231", "1")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
