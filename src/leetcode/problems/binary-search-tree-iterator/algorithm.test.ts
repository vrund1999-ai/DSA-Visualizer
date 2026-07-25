import { describe, it, expect } from "vitest";
import { bstIterSteps } from "./algorithm";
import { CODE } from "./code";

const inorder = (heap: (number | null)[]) => {
  const steps = bstIterSteps(heap);
  return steps[steps.length - 1].data.answer;
};

describe("bstIterSteps", () => {
  it("produces the in-order sequence", () => {
    expect(inorder([7, 3, 15, null, null, 9, 20])).toEqual([3, 7, 9, 15, 20]);
    expect(inorder([1])).toEqual([1]);
    expect(inorder([4, 2, 6, 1, 3, 5, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of bstIterSteps([7, 3, 15, null, null, 9, 20])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
