import type { Step } from "@/core/types";

export interface BstBuildData {
  preorder: number[];
  /** heap-array tree built so far */
  heap: (number | null)[];
  /** preorder index consumed */
  i: number;
  /** heap index just placed */
  placed: number | null;
  /** current upper bound (or null for ∞) */
  bound: number | null;
  answer: (number | null)[] | null;
}

export type BstBuildStep = Step<BstBuildData>;

/**
 * Preorder visits the root first, so the first value is the subtree root. Everything smaller than it
 * (up to the inherited bound) forms the left subtree; the rest, still under the outer bound, forms the
 * right. Passing the bound down places each value uniquely without searching. `line` indexes CODE.
 */
export function bstBuildSteps(preorder: number[]): BstBuildStep[] {
  const steps: BstBuildStep[] = [];
  const heap: (number | null)[] = [];
  let i = 0;

  const snap = (o: Partial<BstBuildData>): BstBuildData => ({ preorder, heap: [...heap], i, placed: null, bound: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BstBuildData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Preorder's first value roots the subtree; split the rest by an upper bound.");

  const build = (hi: number, bound: number) => {
    if (i === preorder.length || preorder[i] > bound) return;
    const val = preorder[i++];
    while (heap.length <= hi) heap.push(null);
    heap[hi] = val;
    push(5, `Place ${val} at the tree; left holds values < ${val}, right < ${bound === Infinity ? "∞" : bound}.`, { placed: hi, bound: bound === Infinity ? null : bound });
    build(2 * hi + 1, val);
    build(2 * hi + 2, bound);
  };

  build(0, Infinity);
  push(10, "BST constructed.", { answer: [...heap] });
  return steps;
}
