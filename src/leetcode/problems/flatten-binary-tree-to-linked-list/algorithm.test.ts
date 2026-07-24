import { describe, it, expect } from "vitest";
import { flattenSteps } from "./algorithm";
import { CODE } from "./code";

const flatten = (heap: (number | null)[]) => {
  const steps = flattenSteps(heap);
  return steps[steps.length - 1].data.list;
};

describe("flattenSteps", () => {
  it("produces the preorder sequence", () => {
    expect(flatten([1, 2, 5, 3, 4, null, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(flatten([1])).toEqual([1]);
    expect(flatten([])).toEqual([]);
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of flattenSteps([1, 2, 5, 3, 4, null, 6])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
