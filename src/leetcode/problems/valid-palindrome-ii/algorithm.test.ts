import { describe, it, expect } from "vitest";
import { validPalinSteps } from "./algorithm";
import { CODE } from "./code";

const valid = (s: string) => {
  const steps = validPalinSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("validPalinSteps", () => {
  it("allows at most one deletion", () => {
    expect(valid("aba")).toBe(true);
    expect(valid("abca")).toBe(true);
    expect(valid("abc")).toBe(false);
    expect(valid("deeee")).toBe(true);
    expect(valid("eeccccbebaeeabebccceea")).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of validPalinSteps("abca")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
