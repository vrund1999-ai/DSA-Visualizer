import { describe, it, expect } from "vitest";
import { wordPatternSteps } from "./algorithm";
import { CODE } from "./code";

const matches = (pattern: string, s: string) => {
  const steps = wordPatternSteps({ pattern, s });
  return steps[steps.length - 1].data.result;
};

describe("wordPatternSteps", () => {
  it("recognizes matching patterns", () => {
    expect(matches("abba", "dog cat cat dog")).toBe(true);
  });

  it("rejects mismatches", () => {
    expect(matches("abba", "dog cat cat fish")).toBe(false);
    expect(matches("aaaa", "dog cat cat dog")).toBe(false);
    expect(matches("abba", "dog dog dog dog")).toBe(false);
    expect(matches("ab", "dog")).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of wordPatternSteps({ pattern: "abba", s: "dog cat cat dog" })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
