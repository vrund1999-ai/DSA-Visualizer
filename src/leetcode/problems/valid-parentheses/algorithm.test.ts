import { describe, it, expect } from "vitest";
import { validParenSteps } from "./algorithm";
import { CODE } from "./code";

const result = (s: string) => {
  const steps = validParenSteps(s);
  return steps[steps.length - 1].data.result;
};

describe("validParenSteps", () => {
  it("accepts well-matched brackets", () => {
    expect(result("()")).toBe(true);
    expect(result("()[]{}")).toBe(true);
    expect(result("([{}])[]")).toBe(true);
  });

  it("rejects mismatched or unbalanced brackets", () => {
    expect(result("(]")).toBe(false);
    expect(result("([)]")).toBe(false);
    expect(result("(")).toBe(false);
    expect(result(")")).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of validParenSteps("([{}])[]")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
