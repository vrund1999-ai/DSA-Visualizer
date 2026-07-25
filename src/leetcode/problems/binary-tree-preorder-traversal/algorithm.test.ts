import { describe, it, expect } from "vitest";
import { preorderSteps } from "./algorithm";
import { CODE } from "./code";

const preorder = (heap: (number | null)[]) => {
  const steps = preorderSteps(heap);
  return steps[steps.length - 1].data.answer;
};

describe("preorderSteps", () => {
  it("returns root-left-right order", () => {
    expect(preorder([1, 2, 3, 4, 5, null, 6])).toEqual([1, 2, 4, 5, 3, 6]);
    expect(preorder([1])).toEqual([1]);
    expect(preorder([1, null, 2, null, null, 3])).toEqual([1, 2, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of preorderSteps([1, 2, 3, 4, 5, null, 6])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
