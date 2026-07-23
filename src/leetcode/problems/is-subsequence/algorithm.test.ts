import { describe, it, expect } from "vitest";
import { isSubsequenceSteps } from "./algorithm";
import { CODE } from "./code";

const isSub = (s: string, t: string) => {
  const steps = isSubsequenceSteps({ s, t });
  return steps[steps.length - 1].data.result;
};

describe("isSubsequenceSteps", () => {
  it("recognizes subsequences", () => {
    expect(isSub("abc", "ahbgdc")).toBe(true);
    expect(isSub("", "anything")).toBe(true);
  });

  it("rejects non-subsequences", () => {
    expect(isSub("axc", "ahbgdc")).toBe(false);
    expect(isSub("abc", "ab")).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of isSubsequenceSteps({ s: "abc", t: "ahbgdc" })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
