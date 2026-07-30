import type { Step } from "@/core/types";

export interface LcaDeepestData {
  heap: (number | null)[];
  /** heap index currently returning from DFS */
  active: number | null;
  /** heap index of the current best LCA */
  lca: number | null;
  /** heap indices of the deepest leaves */
  deepest: number[];
  answer: number | null;
}

export type LcaDeepestStep = Step<LcaDeepestData>;

/**
 * LCA of Deepest Leaves: a post-order DFS returns each subtree's depth and the LCA of its deepest leaves.
 * When a node's two subtrees are equally deep, that node is the LCA for its span; otherwise the deeper
 * side's LCA bubbles up. The tree is a heap array (children at 2i+1 / 2i+2). `line` indexes CODE.
 */
export function lcaDeepestSteps(heap: (number | null)[]): LcaDeepestStep[] {
  const steps: LcaDeepestStep[] = [];

  // find the maximum depth and the leaves at it (for display)
  let maxDepth = 0;
  const depthOf: number[] = [];
  const present = (i: number) => i < heap.length && heap[i] !== null;
  const measure = (i: number, d: number) => {
    if (!present(i)) return;
    depthOf[i] = d;
    maxDepth = Math.max(maxDepth, d);
    measure(2 * i + 1, d + 1);
    measure(2 * i + 2, d + 1);
  };
  measure(0, 0);
  const deepest = heap.map((_, i) => i).filter((i) => present(i) && !present(2 * i + 1) && !present(2 * i + 2) && depthOf[i] === maxDepth);

  const snap = (o: Partial<LcaDeepestData>): LcaDeepestData => ({
    heap,
    active: null,
    lca: null,
    deepest,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<LcaDeepestData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Post-order DFS returns each subtree's depth and the LCA of its deepest leaves.`);

  const dfs = (i: number): { depth: number; lca: number | null } => {
    if (!present(i)) return { depth: 0, lca: null };
    const L = dfs(2 * i + 1);
    const R = dfs(2 * i + 2);
    let res: { depth: number; lca: number | null };
    if (L.depth === R.depth) res = { depth: L.depth + 1, lca: i };
    else if (L.depth > R.depth) res = { depth: L.depth + 1, lca: L.lca };
    else res = { depth: R.depth + 1, lca: R.lca };
    push(6, `Node ${heap[i]}: subtree depth ${res.depth}, deepest-leaf LCA = ${res.lca !== null ? heap[res.lca] : "—"}.`, { active: i, lca: res.lca });
    return res;
  };

  const answerIdx = dfs(0).lca;
  push(11, answerIdx !== null ? `LCA of the deepest leaves is node ${heap[answerIdx]}.` : `Tree is empty.`, {
    lca: answerIdx,
    answer: answerIdx,
  });
  return steps;
}
