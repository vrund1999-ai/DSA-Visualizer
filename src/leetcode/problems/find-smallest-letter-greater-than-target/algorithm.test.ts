import { describe, it, expect } from "vitest";
import { nextLetterSteps } from "./algorithm";
import { CODE } from "./code";

const next = (letters: string[], target: string) => {
  const steps = nextLetterSteps(letters, target);
  return steps[steps.length - 1].data.answer;
};

describe("nextLetterSteps", () => {
  it("finds the next greater letter, wrapping around", () => {
    expect(next(["c", "f", "j"], "a")).toBe("c");
    expect(next(["c", "f", "j"], "c")).toBe("f");
    expect(next(["c", "f", "j"], "j")).toBe("c");
    expect(next(["x", "x", "y", "y"], "z")).toBe("x");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of nextLetterSteps(["c", "f", "j"], "c")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
