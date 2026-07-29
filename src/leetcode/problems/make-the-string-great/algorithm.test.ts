import { describe, it, expect } from "vitest";
import { makeGoodSteps } from "./algorithm";
import { CODE } from "./code";

const makeGood = (s: string) => {
  const steps = makeGoodSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("makeGoodSteps", () => {
  it("removes same-letter opposite-case pairs", () => {
    expect(makeGood("leEeetcode")).toBe("leetcode");
    expect(makeGood("abBAcC")).toBe("");
    expect(makeGood("s")).toBe("s");
    expect(makeGood("Pp")).toBe("");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of makeGoodSteps("leEeetcode")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
