import { describe, it, expect } from "vitest";
import { zeroOneSteps } from "./algorithm";
import { CODE } from "./code";

const update = (mat: number[][]) => {
  const steps = zeroOneSteps(mat);
  return steps[steps.length - 1].data.dist;
};

describe("zeroOneSteps", () => {
  it("computes distance to nearest 0", () => {
    expect(update([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toEqual([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
    expect(update([[0, 0, 0], [0, 1, 0], [1, 1, 1]])).toEqual([[0, 0, 0], [0, 1, 0], [1, 2, 1]]);
    expect(update([[0]])).toEqual([[0]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of zeroOneSteps([[0, 0, 0], [0, 1, 0], [1, 1, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
