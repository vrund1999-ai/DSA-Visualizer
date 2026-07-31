import { describe, it, expect } from "vitest";
import { longestSubstrSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string, k: number) => {
  const steps = longestSubstrSteps(s, k);
  return steps[steps.length - 1].data.answer;
};

describe("longestSubstrSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve("aaabb", 3)).toBe(3);
    expect(solve("ababbc", 2)).toBe(5);
    expect(solve("bbaaacbd", 3)).toBe(3);
    expect(solve("a", 2)).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of longestSubstrSteps("ababbc", 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
