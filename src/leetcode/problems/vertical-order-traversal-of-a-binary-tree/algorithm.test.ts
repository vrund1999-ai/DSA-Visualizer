import { describe, it, expect } from "vitest";
import { verticalTraversalSteps } from "./algorithm";
import { CODE } from "./code";

const vertical = (heap: (number | null)[]) => {
  const steps = verticalTraversalSteps(heap);
  return steps[steps.length - 1].data.columns.map((c) => c.vals);
};

describe("verticalTraversalSteps", () => {
  it("orders by column, then row, then value", () => {
    expect(vertical([3, 9, 20, null, null, 15, 7])).toEqual([[9], [3, 15], [20], [7]]);
    // value tie-break: 5 and 6 share (row 2, col 0) → sorted ascending
    expect(vertical([1, 2, 3, 4, 6, 5, 7])).toEqual([[4], [2], [1, 5, 6], [3], [7]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of verticalTraversalSteps([3, 9, 20, null, null, 15, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
