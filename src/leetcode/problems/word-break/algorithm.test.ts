import { describe, it, expect } from "vitest";
import { wordBreakSteps } from "./algorithm";
import { CODE } from "./code";

const canBreak = (s: string, dict: string[]) => {
  const steps = wordBreakSteps({ s, dict });
  return steps[steps.length - 1].data.dp[s.length];
};

describe("wordBreakSteps", () => {
  it("segments strings that can be broken", () => {
    expect(canBreak("leetcode", ["leet", "code"])).toBe(true);
    expect(canBreak("applepenapple", ["apple", "pen"])).toBe(true);
  });

  it("rejects strings that cannot be broken", () => {
    expect(canBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of wordBreakSteps({ s: "leetcode", dict: ["leet", "code"] })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
