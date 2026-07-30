import { describe, it, expect } from "vitest";
import { pacAtlSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (heights: number[][]) => {
  const steps = pacAtlSteps(heights);
  const ans = steps[steps.length - 1].data.answer!;
  return new Set(ans.map(([r, c]) => `${r},${c}`));
};

describe("pacAtlSteps", () => {
  it("finds cells draining to both oceans", () => {
    const res = solve([
      [1, 2, 2, 3, 5],
      [3, 2, 3, 4, 4],
      [2, 4, 5, 3, 1],
      [6, 7, 1, 4, 5],
      [5, 1, 1, 2, 4],
    ]);
    const expected = ["0,4", "1,3", "1,4", "2,2", "3,0", "3,1", "4,0"];
    expect(res).toEqual(new Set(expected));
  });

  it("handles a single cell (touches both oceans)", () => {
    expect(solve([[5]])).toEqual(new Set(["0,0"]));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of pacAtlSteps([[1, 2], [4, 3]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
