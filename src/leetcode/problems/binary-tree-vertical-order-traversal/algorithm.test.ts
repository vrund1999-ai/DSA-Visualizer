import { describe, it, expect } from "vitest";
import { verticalOrderSteps } from "./algorithm";
import { CODE } from "./code";

const vertical = (heap: (number | null)[]) => {
  const steps = verticalOrderSteps(heap);
  return steps[steps.length - 1].data.columns.map((c) => c.vals);
};

describe("verticalOrderSteps", () => {
  it("groups node values by column left to right", () => {
    expect(vertical([3, 9, 20, null, null, 15, 7])).toEqual([[9], [3, 15], [20], [7]]);
    expect(vertical([1, 2, 3, 4, 5, 6, 7])).toEqual([[4], [2], [1, 5, 6], [3], [7]]);
    expect(vertical([])).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of verticalOrderSteps([3, 9, 20, null, null, 15, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
