import { describe, it, expect } from "vitest";
import { vowelSubstrSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (word: string) => {
  const steps = vowelSubstrSteps(word);
  return steps[steps.length - 1].data.answer;
};

describe("vowelSubstrSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve("aeiouu")).toBe(2);
    expect(solve("unicornarihan")).toBe(0);
    expect(solve("cuaieuouac")).toBe(7);
    expect(solve("bbaeixoun")).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of vowelSubstrSteps("cuaieuouac")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
