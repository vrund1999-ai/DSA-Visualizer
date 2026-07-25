import { describe, it, expect } from "vitest";
import { criticalSteps } from "./algorithm";
import { CODE } from "./code";

const bridges = (n: number, connections: number[][]) => {
  const steps = criticalSteps(n, connections);
  const res = steps[steps.length - 1].data.answer!;
  return res.map(([a, b]) => (a < b ? `${a}-${b}` : `${b}-${a}`)).sort();
};

describe("criticalSteps", () => {
  it("finds all bridges", () => {
    expect(bridges(4, [[0, 1], [1, 2], [2, 0], [1, 3]])).toEqual(["1-3"]);
    expect(bridges(6, [[0, 1], [1, 2], [2, 0], [1, 3], [3, 4], [4, 5], [5, 3]])).toEqual(["1-3"]);
    expect(bridges(2, [[0, 1]])).toEqual(["0-1"]);
    expect(bridges(3, [[0, 1], [1, 2], [2, 0]])).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of criticalSteps(4, [[0, 1], [1, 2], [2, 0], [1, 3]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
