import { describe, it, expect } from "vitest";
import { validParenSteps } from "./algorithm";
import { CODE } from "./code";

const valid = (s: string) => {
  const steps = validParenSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("validParenSteps", () => {
  it("validates strings with wildcards", () => {
    expect(valid("()")).toBe(true);
    expect(valid("(*)")).toBe(true);
    expect(valid("(*))")).toBe(true);
    expect(valid(")(")).toBe(false);
    expect(valid("(((**")).toBe(false);
    expect(valid("***")).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of validParenSteps("(*))")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
