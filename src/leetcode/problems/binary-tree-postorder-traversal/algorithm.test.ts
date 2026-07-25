import { describe, it, expect } from "vitest";
import { postorderSteps } from "./algorithm";
import { CODE } from "./code";

const postorder = (heap: (number | null)[]) => {
  const steps = postorderSteps(heap);
  return steps[steps.length - 1].data.answer;
};

describe("postorderSteps", () => {
  it("returns left-right-root order", () => {
    expect(postorder([1, 2, 3, 4, 5, null, 6])).toEqual([4, 5, 2, 6, 3, 1]);
    expect(postorder([1])).toEqual([1]);
    expect(postorder([1, null, 2, null, null, 3])).toEqual([3, 2, 1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of postorderSteps([1, 2, 3, 4, 5, null, 6])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
