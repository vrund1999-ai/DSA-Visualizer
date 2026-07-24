import { describe, it, expect } from "vitest";
import { allPathsSteps } from "./algorithm";
import { CODE } from "./code";

const paths = (graph: number[][]) => {
  const steps = allPathsSteps(graph);
  return steps[steps.length - 1].data.results;
};

describe("allPathsSteps", () => {
  it("finds all source-to-target paths", () => {
    expect(paths([[1, 2], [3], [3], []])).toEqual([
      [0, 1, 3],
      [0, 2, 3],
    ]);
    expect(paths([[4, 3, 1], [3, 2, 4], [3], [4], []])).toEqual([
      [0, 4],
      [0, 3, 4],
      [0, 1, 3, 4],
      [0, 1, 2, 3, 4],
      [0, 1, 4],
    ]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of allPathsSteps([[1, 2], [3], [3], []])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
