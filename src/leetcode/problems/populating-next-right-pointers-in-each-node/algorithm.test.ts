import { describe, it, expect } from "vitest";
import { nextPointerSteps } from "./algorithm";
import { CODE } from "./code";

const finalNext = (heap: (number | null)[]) => {
  const steps = nextPointerSteps(heap);
  const { next } = steps[steps.length - 1].data;
  return Object.fromEntries(Object.entries(next).map(([f, t]) => [heap[+f], heap[t]]));
};

describe("nextPointerSteps", () => {
  it("wires each node to its right neighbour on the same level", () => {
    // perfect tree [1,2,3,4,5,6,7]: 2->3, 4->5, 5->6, 6->7
    expect(finalNext([1, 2, 3, 4, 5, 6, 7])).toEqual({ 2: 3, 4: 5, 5: 6, 6: 7 });
  });

  it("handles a single node (no pointers)", () => {
    expect(finalNext([1])).toEqual({});
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of nextPointerSteps([1, 2, 3, 4, 5, 6, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
