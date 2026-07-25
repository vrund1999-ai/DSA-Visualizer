import { describe, it, expect } from "vitest";
import { safeStatesSteps } from "./algorithm";
import { CODE } from "./code";

const safe = (graph: number[][]) => {
  const steps = safeStatesSteps(graph);
  return steps[steps.length - 1].data.answer;
};

describe("safeStatesSteps", () => {
  it("finds eventually safe nodes", () => {
    expect(safe([[1, 2], [2, 3], [5], [0], [5], [], []])).toEqual([2, 4, 5, 6]);
    expect(safe([[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []])).toEqual([4]);
    expect(safe([[], [0, 2, 3, 4], [3], [4], []])).toEqual([0, 1, 2, 3, 4]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of safeStatesSteps([[1, 2], [2, 3], [5], [0], [5], [], []])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
