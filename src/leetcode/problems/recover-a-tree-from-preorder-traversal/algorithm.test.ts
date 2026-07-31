import { describe, it, expect } from "vitest";
import { recoverTreeSteps } from "./algorithm";
import { CODE } from "./code";

const finalHeap = (s: string) => {
  const steps = recoverTreeSteps(s);
  return steps[steps.length - 1].data.heap;
};

describe("recoverTreeSteps", () => {
  it("rebuilds the heap array from the preorder string", () => {
    expect(finalHeap("1-2--3--4-5--6--7")).toEqual([1, 2, 5, 3, 4, 6, 7]);
    expect(finalHeap("1-2--3---4-5--6---7")).toEqual([1, 2, 5, 3, null, 6, null, 4, null, null, null, 7]);
  });

  it("every value has a non-null parent (valid heap)", () => {
    const heap = finalHeap("1-2--3--4-5--6--7");
    for (let i = 1; i < heap.length; i++) {
      if (heap[i] !== null) expect(heap[(i - 1) >> 1]).not.toBeNull();
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of recoverTreeSteps("1-2--3--4-5--6--7")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
