import { describe, it, expect } from "vitest";
import { sortedBSTSteps } from "./algorithm";
import { CODE } from "./code";

const heapOf = (nums: number[]) => {
  const steps = sortedBSTSteps(nums);
  return steps[steps.length - 1].data.heap;
};

/** In-order traversal of the heap array should recover the sorted input. */
function inorder(heap: (number | null)[], i = 0, out: number[] = []): number[] {
  if (i >= heap.length || heap[i] === null) return out;
  inorder(heap, 2 * i + 1, out);
  out.push(heap[i] as number);
  inorder(heap, 2 * i + 2, out);
  return out;
}

describe("sortedBSTSteps", () => {
  it("produces a BST whose in-order is the sorted input", () => {
    const nums = [-10, -3, 0, 5, 9, 12, 15];
    expect(inorder(heapOf(nums))).toEqual(nums);
  });

  it("roots each subtree at the middle element", () => {
    expect(heapOf([1, 2, 3])[0]).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of sortedBSTSteps([-10, -3, 0, 5, 9])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
