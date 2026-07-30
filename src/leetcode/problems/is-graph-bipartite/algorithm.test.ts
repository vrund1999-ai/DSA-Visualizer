import { describe, it, expect } from "vitest";
import { bipartiteSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (graph: number[][]) => {
  const steps = bipartiteSteps(graph);
  return steps[steps.length - 1].data.answer;
};

describe("bipartiteSteps", () => {
  it("detects bipartite graphs", () => {
    expect(solve([[1, 3], [0, 2], [1, 3], [0, 2]])).toBe(true);
    expect(solve([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]])).toBe(false);
    expect(solve([[], [], []])).toBe(true);
    expect(solve([[1], [0]])).toBe(true);
    expect(solve([[1, 2], [0, 2], [0, 1]])).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of bipartiteSteps([[1, 3], [0, 2], [1, 3], [0, 2]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
