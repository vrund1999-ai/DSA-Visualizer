import { describe, it, expect } from "vitest";
import { recoverBstSteps } from "./algorithm";
import { CODE } from "./code";

const recovered = (heap: (number | null)[]) => {
  const steps = recoverBstSteps(heap);
  return steps[steps.length - 1].data.answer;
};

const isSorted = (a: number[]) => a.every((v, i) => i === 0 || a[i - 1] < v);

describe("recoverBstSteps", () => {
  it("restores a sorted in-order sequence", () => {
    expect(isSorted(recovered([4, 6, 2, 1, 3, 5, 7])!)).toBe(true);
    expect(recovered([4, 6, 2, 1, 3, 5, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    // adjacent swap: root 3 and its left child 1 -> heap [1,3,2]? build a valid case
    expect(isSorted(recovered([2, 3, 1])!)).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of recoverBstSteps([4, 6, 2, 1, 3, 5, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
