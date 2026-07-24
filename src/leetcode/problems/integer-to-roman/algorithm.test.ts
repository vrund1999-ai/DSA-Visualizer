import { describe, it, expect } from "vitest";
import { intToRomanSteps } from "./algorithm";
import { CODE } from "./code";

const toRoman = (n: number) => {
  const steps = intToRomanSteps(n);
  return steps[steps.length - 1].data.result;
};

describe("intToRomanSteps", () => {
  it("converts integers to Roman numerals", () => {
    expect(toRoman(3)).toBe("III");
    expect(toRoman(58)).toBe("LVIII");
    expect(toRoman(1994)).toBe("MCMXCIV");
    expect(toRoman(4)).toBe("IV");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of intToRomanSteps(1994)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
