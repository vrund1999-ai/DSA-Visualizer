import { describe, it, expect } from "vitest";
import { charReplaceSteps } from "./algorithm";
import { CODE } from "./code";

const best = (s: string, k: number) => {
  const steps = charReplaceSteps({ s, k });
  return steps[steps.length - 1].data.best;
};

describe("charReplaceSteps", () => {
  it("computes the longest achievable run", () => {
    expect(best("ABAB", 2)).toBe(4);
    expect(best("AABABBA", 1)).toBe(4);
    expect(best("AAAA", 0)).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of charReplaceSteps({ s: "AABABBA", k: 1 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
