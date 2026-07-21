import { describe, it, expect } from "vitest";
import { rotateSteps } from "./algorithm";
import { CODE } from "./code";

const rotate = (m: number[][]) => {
  const steps = rotateSteps(m);
  return steps[steps.length - 1].data.matrix;
};

describe("rotateSteps", () => {
  it("rotates a 3x3 matrix 90° clockwise", () => {
    expect(
      rotate([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  it("rotates a 2x2 matrix", () => {
    expect(
      rotate([
        [1, 2],
        [3, 4],
      ]),
    ).toEqual([
      [3, 1],
      [4, 2],
    ]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rotateSteps([[1, 2], [3, 4]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
