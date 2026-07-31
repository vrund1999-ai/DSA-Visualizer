import { describe, it, expect } from "vitest";
import { alienSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (words: string[]) => {
  const steps = alienSteps(words);
  return steps[steps.length - 1].data.answer;
};

describe("alienSteps", () => {
  it("derives a valid order", () => {
    expect(solve(["wrt", "wrf", "er", "ett", "rftt"])).toBe("wertf");
    expect(solve(["z", "x"])).toBe("zx");
  });

  it("returns empty on a cycle or invalid prefix", () => {
    expect(solve(["z", "x", "z"])).toBe("");
    expect(solve(["abc", "ab"])).toBe("");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of alienSteps(["wrt", "wrf", "er", "ett", "rftt"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
