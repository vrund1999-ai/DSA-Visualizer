import { describe, it, expect } from "vitest";
import { strStrSteps } from "./algorithm";
import { CODE } from "./code";

const strStr = (haystack: string, needle: string) => {
  const steps = strStrSteps({ haystack, needle });
  return steps[steps.length - 1].data.answer;
};

describe("strStrSteps", () => {
  it("finds the first occurrence", () => {
    expect(strStr("sadbutsad", "sad")).toBe(0);
    expect(strStr("leetcode", "leeto")).toBe(-1);
    expect(strStr("mississippi", "issip")).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of strStrSteps({ haystack: "sadbutsad", needle: "sad" })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
