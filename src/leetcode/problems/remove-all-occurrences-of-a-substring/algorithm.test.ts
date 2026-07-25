import { describe, it, expect } from "vitest";
import { removeOccSteps } from "./algorithm";
import { CODE } from "./code";

const remove = (s: string, part: string) => {
  const steps = removeOccSteps(s, part);
  return steps[steps.length - 1].data.answer;
};

describe("removeOccSteps", () => {
  it("removes all occurrences, exposing new matches", () => {
    expect(remove("daabcbaabcbc", "abc")).toBe("dab");
    expect(remove("axxxxyyyyb", "xy")).toBe("ab");
    expect(remove("aaaaa", "aa")).toBe("a");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of removeOccSteps("daabcbaabcbc", "abc")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
