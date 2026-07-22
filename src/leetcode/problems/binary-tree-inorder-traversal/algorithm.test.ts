import { describe, it, expect } from "vitest";
import { inorderSteps } from "./algorithm";
import { CODE } from "./code";

const inorder = (heap: (number | null)[]) => {
  const steps = inorderSteps(heap);
  return steps[steps.length - 1].data.result;
};

describe("inorderSteps", () => {
  it("produces left → node → right order", () => {
    expect(inorder([1, 2, 3, 4, 5])).toEqual([4, 2, 5, 1, 3]);
    expect(inorder([])).toEqual([]);
    expect(inorder([1])).toEqual([1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of inorderSteps([1, 2, 3, 4, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
