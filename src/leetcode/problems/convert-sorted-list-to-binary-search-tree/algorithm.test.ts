import { describe, it, expect } from "vitest";
import { sortedBstSteps } from "./algorithm";
import { CODE } from "./code";

const finalHeap = (values: number[]) => {
  const steps = sortedBstSteps(values);
  return steps[steps.length - 1].data.heap;
};

/** in-order traversal of a heap-array tree should recover the sorted input. */
const inorder = (heap: (number | null)[]) => {
  const out: number[] = [];
  const go = (i: number) => {
    if (i >= heap.length || heap[i] === null) return;
    go(2 * i + 1);
    out.push(heap[i] as number);
    go(2 * i + 2);
  };
  go(0);
  return out;
};

describe("sortedBstSteps", () => {
  it("produces a BST whose in-order traversal is the sorted input", () => {
    for (const vals of [[-10, -3, 0, 5, 9], [1, 2, 3], [0], [1, 3, 5, 7, 9, 11, 13]]) {
      expect(inorder(finalHeap(vals))).toEqual(vals);
    }
  });

  it("builds a height-balanced tree (every value has a non-null parent)", () => {
    const heap = finalHeap([-10, -3, 0, 5, 9]);
    for (let i = 1; i < heap.length; i++) {
      if (heap[i] !== null) expect(heap[(i - 1) >> 1]).not.toBeNull();
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of sortedBstSteps([-10, -3, 0, 5, 9])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
