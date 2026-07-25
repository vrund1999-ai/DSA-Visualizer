import { describe, it, expect } from "vitest";
import { floodFillSteps } from "./algorithm";
import { CODE } from "./code";

const fill = (image: number[][], sr: number, sc: number, color: number) => {
  const steps = floodFillSteps(image, sr, sc, color);
  return steps[steps.length - 1].data.image;
};

describe("floodFillSteps", () => {
  it("recolors the connected region", () => {
    expect(fill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2)).toEqual([[2, 2, 2], [2, 2, 0], [2, 0, 1]]);
    expect(fill([[0, 0, 0], [0, 0, 0]], 0, 0, 5)).toEqual([[5, 5, 5], [5, 5, 5]]);
    // start color equals target -> unchanged
    expect(fill([[0, 0], [0, 0]], 0, 0, 0)).toEqual([[0, 0], [0, 0]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of floodFillSteps([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
