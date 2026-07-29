import { describe, it, expect } from "vitest";
import { treeRowSteps } from "./algorithm";
import { CODE } from "./code";

const rows = (heap: (number | null)[]) => {
  const steps = treeRowSteps(heap);
  return steps[steps.length - 1].data.answer;
};

describe("treeRowSteps", () => {
  it("returns the largest value in each row", () => {
    expect(rows([1, 3, 2, 5, 3, null, 9])).toEqual([1, 3, 9]);
    expect(rows([1, 2, 3])).toEqual([1, 3]);
    expect(rows([1])).toEqual([1]);
    expect(rows([])).toEqual([]);
  });

  it("handles negative values", () => {
    expect(rows([-1, -2, -3])).toEqual([-1, -2]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of treeRowSteps([1, 3, 2, 5, 3, null, 9])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
