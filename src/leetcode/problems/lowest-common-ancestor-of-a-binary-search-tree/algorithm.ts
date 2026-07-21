import type { Step } from "@/core/types";

export interface LCAInput {
  heap: (number | null)[];
  p: number;
  q: number;
}

export interface LCAData {
  heap: (number | null)[];
  p: number;
  q: number;
  current: number | null;
  path: number[];
  lca: number | null;
}

export type LCAStep = Step<LCAData>;

/**
 * In a BST the lowest common ancestor is the first node where p and q fall on
 * different sides (or one equals the node). Walk down: both smaller → go left,
 * both larger → go right, otherwise this is the split point. `line` indexes CODE.
 */
export function lcaSteps(input: LCAInput): LCAStep[] {
  const { heap, p, q } = input;
  const steps: LCAStep[] = [];
  const path: number[] = [];

  const snap = (o: Partial<LCAData>): LCAData => ({
    heap: [...heap],
    p,
    q,
    current: null,
    path: [...path],
    lca: null,
    ...o,
  });
  const push = (line: number, explanation: string, data: LCAData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Find the lowest common ancestor of ${p} and ${q}.`, snap({ current: 0 }));

  let i = 0;
  while (i < heap.length && heap[i] !== null) {
    const v = heap[i] as number;
    path.push(i);
    if (p < v && q < v) {
      push(4, `Both ${p} and ${q} < ${v} — the LCA is in the left subtree.`, snap({ current: i }));
      i = 2 * i + 1;
    } else if (p > v && q > v) {
      push(6, `Both ${p} and ${q} > ${v} — the LCA is in the right subtree.`, snap({ current: i }));
      i = 2 * i + 2;
    } else {
      push(8, `${p} and ${q} split at ${v} — it's the lowest common ancestor.`, snap({ current: i, lca: i }));
      return steps;
    }
  }

  return steps;
}
