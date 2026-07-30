import { describe, it, expect } from "vitest";
import { spellSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (wordlist: string[], queries: string[]) => {
  const steps = spellSteps(wordlist, queries);
  return steps[steps.length - 1].data.answers;
};

describe("spellSteps", () => {
  it("matches the canonical example with correct precedence", () => {
    expect(
      solve(
        ["KiTe", "kite", "hare", "Hare"],
        ["kite", "Kite", "KiTe", "Hare", "HARE", "Hear", "hear", "keti", "keet", "keto"],
      ),
    ).toEqual(["kite", "KiTe", "KiTe", "Hare", "hare", "", "", "KiTe", "", "KiTe"]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of spellSteps(["a", "b"], ["a", "c"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
