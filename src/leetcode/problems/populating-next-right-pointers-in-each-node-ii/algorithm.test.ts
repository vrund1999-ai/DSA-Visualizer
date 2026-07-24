import { describe, it, expect } from "vitest";
import { nextPointerIISteps } from "./algorithm";
import { CODE } from "./code";

const finalNext = (heap: (number | null)[]) => {
  const steps = nextPointerIISteps(heap);
  const { next } = steps[steps.length - 1].data;
  return Object.fromEntries(Object.entries(next).map(([f, t]) => [heap[+f], heap[t]]));
};

describe("nextPointerIISteps", () => {
  it("links right neighbours in a non-perfect tree", () => {
    // [1,2,3,4,5,null,7]: 2->3, 4->5, 5->7
    expect(finalNext([1, 2, 3, 4, 5, null, 7])).toEqual({ 2: 3, 4: 5, 5: 7 });
  });

  it("links a perfect tree", () => {
    expect(finalNext([1, 2, 3, 4, 5, 6, 7])).toEqual({ 2: 3, 4: 5, 5: 6, 6: 7 });
  });

  it("handles a single node", () => {
    expect(finalNext([1])).toEqual({});
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of nextPointerIISteps([1, 2, 3, 4, 5, null, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
