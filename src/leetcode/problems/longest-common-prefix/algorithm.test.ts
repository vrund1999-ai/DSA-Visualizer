import { describe, it, expect } from "vitest";
import { lcpSteps } from "./algorithm";
import { CODE } from "./code";

const lcp = (words: string[]) => {
  const steps = lcpSteps(words);
  const { words: w, prefixLen } = steps[steps.length - 1].data;
  return w[0] ? w[0].slice(0, prefixLen) : "";
};

describe("lcpSteps", () => {
  it("finds the longest common prefix", () => {
    expect(lcp(["flower", "flow", "flight"])).toBe("fl");
    expect(lcp(["interspecies", "interstellar", "interstate"])).toBe("inters");
  });

  it("returns empty string when there is no common prefix", () => {
    expect(lcp(["dog", "racecar", "car"])).toBe("");
    expect(lcp([])).toBe("");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of lcpSteps(["flower", "flow", "flight"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
