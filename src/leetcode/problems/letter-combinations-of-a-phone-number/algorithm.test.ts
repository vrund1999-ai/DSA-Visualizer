import { describe, it, expect } from "vitest";
import { letterComboSteps } from "./algorithm";
import { CODE } from "./code";

const combos = (digits: string) => {
  const steps = letterComboSteps(digits);
  return steps[steps.length - 1].data.results;
};

describe("letterComboSteps", () => {
  it("generates all keypad combinations", () => {
    expect(combos("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
    expect(combos("2")).toEqual(["a", "b", "c"]);
  });

  it("returns nothing for empty input", () => {
    expect(combos("")).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of letterComboSteps("23")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
