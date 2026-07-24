import { describe, it, expect } from "vitest";
import { buildTreeSteps } from "./algorithm";
import { CODE } from "./code";

const heapOf = (preorder: number[], inorder: number[]) => {
  const steps = buildTreeSteps({ preorder, inorder });
  return steps[steps.length - 1].data.heap;
};

/** In-order traversal of the heap should recover the inorder input. */
function inorderOf(heap: (number | null)[], i = 0, out: number[] = []): number[] {
  if (i >= heap.length || heap[i] === null) return out;
  inorderOf(heap, 2 * i + 1, out);
  out.push(heap[i] as number);
  inorderOf(heap, 2 * i + 2, out);
  return out;
}

describe("buildTreeSteps", () => {
  it("reconstructs a tree matching the traversals", () => {
    const pre = [3, 9, 20, 15, 7];
    const ino = [9, 3, 15, 20, 7];
    const heap = heapOf(pre, ino);
    expect(heap[0]).toBe(3); // preorder root
    expect(inorderOf(heap)).toEqual(ino);
  });

  it("handles a single node", () => {
    expect(heapOf([1], [1])[0]).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of buildTreeSteps({ preorder: [3, 9, 20, 15, 7], inorder: [9, 3, 15, 20, 7] })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
