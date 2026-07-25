import { describe, it, expect } from "vitest";
import { validWordSteps } from "./algorithm";
import { CODE } from "./code";

const valid = (word: string) => {
  const steps = validWordSteps(word);
  return steps[steps.length - 1].data.answer;
};

describe("validWordSteps", () => {
  it("applies all validity rules", () => {
    expect(valid("234Adas")).toBe(true);
    expect(valid("b3")).toBe(false); // too short
    expect(valid("a3$e")).toBe(false); // illegal char
    expect(valid("123")).toBe(false); // no vowel/consonant
    expect(valid("Uva")).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of validWordSteps("234Adas")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
