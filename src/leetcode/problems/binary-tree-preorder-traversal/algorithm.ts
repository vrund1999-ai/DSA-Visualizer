import type { Step } from "@/core/types";

export interface PreorderData {
  /** heap-array tree: children of i are 2i+1 and 2i+2, null = absent */
  heap: (number | null)[];
  /** heap index currently being visited */
  cur: number | null;
  /** heap indices already emitted */
  visited: number[];
  out: number[];
  answer: number[] | null;
}

export type PreorderStep = Step<PreorderData>;

/**
 * Preorder visits root before either subtree: emit the node, recurse left, then recurse right.
 * On a heap-array tree the children of index i sit at 2i+1 and 2i+2, so the recursion walks
 * those indices, skipping null slots. `line` indexes CODE.
 */
export function preorderSteps(heap: (number | null)[]): PreorderStep[] {
  const steps: PreorderStep[] = [];
  const out: number[] = [];
  const visited: number[] = [];

  const snap = (o: Partial<PreorderData>): PreorderData => ({ heap, cur: null, visited: [...visited], out: [...out], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PreorderData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Preorder: emit the node, then its left subtree, then its right.");

  const visit = (i: number) => {
    if (i >= heap.length || heap[i] === null) return;
    out.push(heap[i]!);
    visited.push(i);
    push(4, `Visit ${heap[i]} (root of its subtree) → output.`, { cur: i });
    visit(2 * i + 1);
    visit(2 * i + 2);
  };

  visit(0);
  push(9, `Preorder sequence: [${out.join(", ")}].`, { answer: [...out] });
  return steps;
}
