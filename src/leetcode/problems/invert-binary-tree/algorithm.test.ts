import { describe, it, expect } from "vitest";
import { invertSteps } from "./algorithm";
import { CODE } from "./code";

const invert = (heap: (number | null)[]) => {
  const steps = invertSteps(heap);
  return steps[steps.length - 1].data.heap.slice(0, heap.length);
};

describe("invertSteps", () => {
  it("mirrors the tree", () => {
    expect(invert([4, 2, 7, 1, 3, 6, 9])).toEqual([4, 7, 2, 9, 6, 3, 1]);
    expect(invert([1, 2, 3])).toEqual([1, 3, 2]);
  });

  it("handles empty and single-node trees", () => {
    expect(invert([])).toEqual([]);
    expect(invert([1])).toEqual([1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of invertSteps([4, 2, 7, 1, 3, 6, 9])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
