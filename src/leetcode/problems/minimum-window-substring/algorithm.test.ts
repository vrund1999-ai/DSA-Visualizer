import { describe, it, expect } from "vitest";
import { minWindowSteps } from "./algorithm";
import { CODE } from "./code";

const minWindow = (s: string, t: string) => {
  const steps = minWindowSteps(s, t);
  return steps[steps.length - 1].data.answer;
};

describe("minWindowSteps", () => {
  it("finds the minimum covering window", () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
    expect(minWindow("a", "a")).toBe("a");
    expect(minWindow("a", "aa")).toBe("");
    expect(minWindow("aa", "aa")).toBe("aa");
    expect(minWindow("cabwefgewcwaefgcf", "cae")).toBe("cwae");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of minWindowSteps("ADOBECODEBANC", "ABC")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
