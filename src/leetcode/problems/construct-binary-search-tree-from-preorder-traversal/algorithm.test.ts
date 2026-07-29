import { describe, it, expect } from "vitest";
import { bstBuildSteps } from "./algorithm";
import { CODE } from "./code";

// verify the heap-array tree is a valid BST containing exactly the preorder values
const inorder = (heap: (number | null)[]): number[] => {
  const out: number[] = [];
  const walk = (i: number) => {
    if (i >= heap.length || heap[i] === null) return;
    walk(2 * i + 1);
    out.push(heap[i]!);
    walk(2 * i + 2);
  };
  walk(0);
  return out;
};

const build = (preorder: number[]) => {
  const steps = bstBuildSteps(preorder);
  return steps[steps.length - 1].data.answer!;
};

describe("bstBuildSteps", () => {
  it("reconstructs a valid BST (sorted inorder)", () => {
    const heap = build([8, 5, 1, 7, 10, 12]);
    expect(inorder(heap)).toEqual([1, 5, 7, 8, 10, 12]);
    expect(heap[0]).toBe(8); // preorder root
    expect(inorder(build([1, 3])).length).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of bstBuildSteps([8, 5, 1, 7, 10, 12])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
