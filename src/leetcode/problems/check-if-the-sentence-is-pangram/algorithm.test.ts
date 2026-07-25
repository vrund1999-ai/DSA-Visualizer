import { describe, it, expect } from "vitest";
import { pangramSteps } from "./algorithm";
import { CODE } from "./code";

const isPangram = (s: string) => {
  const steps = pangramSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("pangramSteps", () => {
  it("detects pangrams", () => {
    expect(isPangram("thequickbrownfoxjumpsoverthelazydog")).toBe(true);
    expect(isPangram("leetcode")).toBe(false);
    expect(isPangram("abcdefghijklmnopqrstuvwxyz")).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of pangramSteps("thequickbrownfoxjumpsoverthelazydog")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
