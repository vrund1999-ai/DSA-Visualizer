import { describe, it, expect } from "vitest";
import { groupAnagramsSteps } from "./algorithm";
import { CODE } from "./code";

const group = (words: string[]) => {
  const steps = groupAnagramsSteps(words);
  return steps[steps.length - 1].data.groups.map((g) => g.members);
};

describe("groupAnagramsSteps", () => {
  it("groups anagrams together", () => {
    const result = group(["eat", "tea", "tan", "ate", "nat", "bat"]);
    expect(result).toEqual([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);
  });

  it("handles single-word and empty-string inputs", () => {
    expect(group([""])).toEqual([[""]]);
    expect(group(["a"])).toEqual([["a"]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of groupAnagramsSteps(["eat", "tea", "tan"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
