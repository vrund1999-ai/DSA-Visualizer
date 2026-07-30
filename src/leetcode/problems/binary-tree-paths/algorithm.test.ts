import { describe, it, expect } from "vitest";
import { treePathsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (heap: (number | null)[]) => {
  const steps = treePathsSteps(heap);
  return new Set(steps[steps.length - 1].data.answer);
};

describe("treePathsSteps", () => {
  it("lists all root-to-leaf paths", () => {
    expect(solve([1, 2, 3, null, 5])).toEqual(new Set(["1->2->5", "1->3"]));
    expect(solve([1])).toEqual(new Set(["1"]));
    expect(solve([1, 2, 3, 4, 5, 6, 7])).toEqual(new Set(["1->2->4", "1->2->5", "1->3->6", "1->3->7"]));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of treePathsSteps([1, 2, 3, null, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
