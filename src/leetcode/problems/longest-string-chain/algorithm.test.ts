import { describe, it, expect } from "vitest";
import { strChainSteps } from "./algorithm";
import { CODE } from "./code";

const chain = (words: string[]) => {
  const steps = strChainSteps(words);
  return steps[steps.length - 1].data.answer;
};

describe("strChainSteps", () => {
  it("finds the longest string chain", () => {
    expect(chain(["a", "b", "ba", "bca", "bda", "bdca"])).toBe(4);
    expect(chain(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"])).toBe(5);
    expect(chain(["abcd", "dbqca"])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of strChainSteps(["a", "b", "ba", "bca", "bda", "bdca"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
