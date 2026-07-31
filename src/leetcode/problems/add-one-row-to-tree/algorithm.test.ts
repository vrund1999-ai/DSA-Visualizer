import { describe, it, expect } from "vitest";
import { addRowSteps } from "./algorithm";
import { CODE } from "./code";

/** in-order traversal to compare tree structure independent of heap padding. */
const inorder = (heap: (number | null)[]) => {
  const out: (number | null)[] = [];
  const go = (i: number) => {
    if (i >= heap.length || heap[i] === null || heap[i] === undefined) return;
    go(2 * i + 1);
    out.push(heap[i]);
    go(2 * i + 2);
  };
  go(0);
  return out;
};

const finalHeap = (heap: (number | null)[], val: number, depth: number) => {
  const steps = addRowSteps(heap, val, depth);
  return steps[steps.length - 1].data.heap;
};

describe("addRowSteps", () => {
  it("adds a row at depth 2 (in-order matches expected)", () => {
    const h = finalHeap([4, 2, 6, 3, 1, 5], 1, 2);
    // expected tree: 4(1(2(3,1)),1(_,6(5)))
    expect(inorder(h)).toEqual([3, 2, 1, 1, 4, 1, 5, 6]);
  });

  it("depth 1 makes a new root", () => {
    const h = finalHeap([4, 2, 6], 5, 1);
    expect(h[0]).toBe(5);
    expect(inorder(h)).toEqual([2, 4, 6, 5]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of addRowSteps([4, 2, 6, 3, 1, 5], 1, 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
