import { describe, it, expect } from "vitest";
import { romanSteps } from "./algorithm";
import { CODE } from "./code";

const value = (s: string) => {
  const steps = romanSteps(s);
  return steps[steps.length - 1].data.total;
};

describe("romanSteps", () => {
  it("converts Roman numerals", () => {
    expect(value("III")).toBe(3);
    expect(value("LVIII")).toBe(58);
    expect(value("MCMXCIV")).toBe(1994);
    expect(value("IX")).toBe(9);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of romanSteps("MCMXCIV")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
