import { describe, it, expect } from "vitest";
import { parenScoreSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string) => {
  const steps = parenScoreSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("parenScoreSteps", () => {
  it("computes the parentheses score", () => {
    expect(solve("()")).toBe(1);
    expect(solve("(())")).toBe(2);
    expect(solve("()()")).toBe(2);
    expect(solve("(()(()))")).toBe(6);
    expect(solve("((()))")).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of parenScoreSteps("(()(()))")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
