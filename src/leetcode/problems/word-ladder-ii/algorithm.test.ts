import { describe, it, expect } from "vitest";
import { wordLadderSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (begin: string, end: string, list: string[]) => {
  const steps = wordLadderSteps(begin, end, list);
  return steps[steps.length - 1].data.paths;
};

describe("wordLadderSteps", () => {
  it("finds all shortest ladders", () => {
    const paths = solve("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
    expect(new Set(paths.map((p) => p.join(",")))).toEqual(
      new Set(["hit,hot,dot,dog,cog", "hit,hot,lot,log,cog"]),
    );
  });

  it("returns nothing when the end word is missing", () => {
    expect(solve("hit", "cog", ["hot", "dot", "dog", "lot", "log"])).toEqual([]);
  });

  it("all ladders share the minimum length", () => {
    const paths = solve("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
    expect(new Set(paths.map((p) => p.length))).toEqual(new Set([5]));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of wordLadderSteps("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
