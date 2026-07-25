import { describe, it, expect } from "vitest";
import { reorganizeSteps } from "./algorithm";
import { CODE } from "./code";

const reorganize = (s: string) => {
  const steps = reorganizeSteps(s);
  return steps[steps.length - 1].data.answer;
};

const noAdjacent = (s: string) => {
  for (let i = 1; i < s.length; i++) if (s[i] === s[i - 1]) return false;
  return true;
};

const sameMultiset = (a: string, b: string) => [...a].sort().join("") === [...b].sort().join("");

describe("reorganizeSteps", () => {
  it("reorganizes without adjacent duplicates", () => {
    const r1 = reorganize("aab") as string;
    expect(noAdjacent(r1)).toBe(true);
    expect(sameMultiset(r1, "aab")).toBe(true);
    const r2 = reorganize("aaab") as string;
    expect(r2).toBe("");
    const r3 = reorganize("vvvlo") as string;
    expect(noAdjacent(r3)).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of reorganizeSteps("aab")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
