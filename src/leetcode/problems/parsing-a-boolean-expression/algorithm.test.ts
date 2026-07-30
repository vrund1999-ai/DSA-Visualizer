import { describe, it, expect } from "vitest";
import { boolExprSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (expr: string) => {
  const steps = boolExprSteps(expr);
  return steps[steps.length - 1].data.answer;
};

describe("boolExprSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve("&(|(f))")).toBe(false);
    expect(solve("|(f,f,f,t)")).toBe(true);
    expect(solve("!(&(f,t))")).toBe(true);
    expect(solve("t")).toBe(true);
    expect(solve("&(t,t,t)")).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of boolExprSteps("!(&(f,t))")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
