import { describe, it, expect } from "vitest";
import { searchMatrixSteps } from "./algorithm";
import { CODE } from "./code";

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

const search = (target: number) => {
  const steps = searchMatrixSteps(matrix, target);
  return steps[steps.length - 1].data.found;
};

describe("searchMatrixSteps", () => {
  it("searches the sorted matrix", () => {
    expect(search(5)).toBe(true);
    expect(search(20)).toBe(false);
    expect(search(1)).toBe(true);
    expect(search(30)).toBe(true);
    expect(search(31)).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of searchMatrixSteps(matrix, 5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
