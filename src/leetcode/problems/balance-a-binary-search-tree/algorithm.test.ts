import { describe, it, expect } from "vitest";
import { balanceBSTSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (sorted: number[]) => {
  const steps = balanceBSTSteps(sorted);
  return steps[steps.length - 1].data.answer!;
};

// in-order of the heap must equal the sorted input, and the tree must be height-balanced
function inorder(heap: (number | null)[]): number[] {
  const out: number[] = [];
  const rec = (i: number) => {
    if (i >= heap.length || heap[i] === null) return;
    rec(2 * i + 1);
    out.push(heap[i] as number);
    rec(2 * i + 2);
  };
  rec(0);
  return out;
}
function height(heap: (number | null)[], i = 0): number {
  if (i >= heap.length || heap[i] === null) return 0;
  return 1 + Math.max(height(heap, 2 * i + 1), height(heap, 2 * i + 2));
}
function balanced(heap: (number | null)[], i = 0): boolean {
  if (i >= heap.length || heap[i] === null) return true;
  const l = height(heap, 2 * i + 1);
  const r = height(heap, 2 * i + 2);
  return Math.abs(l - r) <= 1 && balanced(heap, 2 * i + 1) && balanced(heap, 2 * i + 2);
}

describe("balanceBSTSteps", () => {
  it("produces a balanced BST preserving the values", () => {
    for (const sorted of [[1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4], [1], [10, 20, 30, 40, 50]]) {
      const heap = solve(sorted);
      expect(inorder(heap)).toEqual(sorted);
      expect(balanced(heap)).toBe(true);
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of balanceBSTSteps([1, 2, 3, 4, 5, 6, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
