import { describe, it, expect } from "vitest";
import { commonCharsSteps } from "./algorithm";
import { CODE } from "./code";

const common = (words: string[]) => {
  const steps = commonCharsSteps(words);
  return steps[steps.length - 1].data.answer!.slice().sort();
};

describe("commonCharsSteps", () => {
  it("finds characters common to all words", () => {
    expect(common(["bella", "label", "roller"])).toEqual(["e", "l", "l"]);
    expect(common(["cool", "lock", "cook"])).toEqual(["c", "o"]);
    expect(common(["abc", "def"])).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of commonCharsSteps(["bella", "label", "roller"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
