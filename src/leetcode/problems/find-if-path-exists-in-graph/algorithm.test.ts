import { describe, it, expect } from "vitest";
import { pathExistsSteps } from "./algorithm";
import { CODE } from "./code";

const hasPath = (n: number, edges: [number, number][], s: number, d: number) => {
  const steps = pathExistsSteps(n, edges, s, d);
  return steps[steps.length - 1].data.answer;
};

describe("pathExistsSteps", () => {
  it("detects connectivity", () => {
    expect(hasPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2)).toBe(true);
    expect(hasPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5)).toBe(false);
    expect(hasPath(6, [[0, 1], [1, 2], [2, 5], [3, 4]], 0, 5)).toBe(true);
    expect(hasPath(1, [], 0, 0)).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of pathExistsSteps(6, [[0, 1], [1, 2], [2, 5], [3, 4]], 0, 5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
