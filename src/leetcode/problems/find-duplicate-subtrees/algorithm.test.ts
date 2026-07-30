import { describe, it, expect } from "vitest";
import { duplicateSubtreesSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (heap: (number | null)[]) => {
  const steps = duplicateSubtreesSteps(heap);
  const last = steps[steps.length - 1].data;
  return last.dupRoots.map((i) => heap[i]).sort();
};

describe("duplicateSubtreesSteps", () => {
  it("finds the duplicate subtree roots", () => {
    // canonical example: leaf 4 and subtree 2->4 are duplicated
    expect(solve([1, 2, 3, 4, null, 2, 4, null, null, null, null, 4])).toEqual([2, 4]);
  });

  it("reports nothing when all subtrees are unique", () => {
    const steps = duplicateSubtreesSteps([1, 2, 3]);
    expect(steps[steps.length - 1].data.dupRoots).toEqual([]);
  });

  it("counts a single duplicated leaf once", () => {
    const steps = duplicateSubtreesSteps([1, 1, 1]); // two leaf 1s under root 1
    expect(steps[steps.length - 1].data.dupRoots.length).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of duplicateSubtreesSteps([1, 2, 3, 4, null, 2, 4, null, null, null, null, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
