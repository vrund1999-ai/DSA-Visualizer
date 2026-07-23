import { describe, it, expect } from "vitest";
import { guessSteps } from "./algorithm";
import { CODE } from "./code";

const guess = (n: number, pick: number) => {
  const steps = guessSteps({ n, pick });
  return steps[steps.length - 1].data.answer;
};

describe("guessSteps", () => {
  it("finds the picked number", () => {
    expect(guess(10, 6)).toBe(6);
    expect(guess(20, 13)).toBe(13);
    expect(guess(1, 1)).toBe(1);
    expect(guess(2, 2)).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of guessSteps({ n: 20, pick: 13 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
