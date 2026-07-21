import { describe, it, expect } from "vitest";
import { leetcode } from "./registry";
import { leetcodeProblems } from "./problems";

const stepCount = (p: ReturnType<typeof leetcode.byId>) => {
  if (!p) return 0;
  return p.buildSteps(p.makeDefaultInput(), p.defaultOptions).length;
};

describe("leetcode registry", () => {
  it("imports the full Bloomberg list", () => {
    // ~1,200 problems from the CSV; guard against an empty/broken import.
    expect(leetcode.count()).toBeGreaterThan(1000);
  });

  it("has no duplicate problem ids across bespoke + bulk", () => {
    const ids = leetcode.all().map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("lets a bespoke problem win over the bulk placeholder of the same slug", () => {
    // Bespoke Two Sum emits many steps; a placeholder emits exactly one.
    expect(stepCount(leetcode.byId("two-sum"))).toBeGreaterThan(1);
    expect(stepCount(leetcode.byId("lru-cache"))).toBe(1);
  });

  it("tags every problem with a difficulty and Bloomberg", () => {
    const all = leetcode.all();
    expect(all.every((p) => ["easy", "medium", "hard"].includes(p.difficulty))).toBe(true);
    expect(leetcode.companies()).toContain("Bloomberg");
  });

  it("exposes topic facets and title search", () => {
    expect(leetcode.topics()).toContain("Array");
    const hits = leetcode.search("two sum").map((p) => p.id);
    expect(hits).toContain("two-sum");
  });

  it("sorts all() by descending frequency", () => {
    const freqs = leetcode
      .all()
      .map((p) => p.frequency ?? -1)
      .slice(0, 50);
    const sorted = [...freqs].sort((a, b) => b - a);
    expect(freqs).toEqual(sorted);
  });

  it("keeps every hand-built problem registered", () => {
    for (const p of leetcodeProblems) {
      expect(leetcode.byId(p.id)).toBeDefined();
    }
  });
});
