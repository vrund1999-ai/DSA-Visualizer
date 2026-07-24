import type { Step } from "@/core/types";

export interface LCAData {
  heap: (number | null)[];
  p: number;
  q: number;
  /** heap index currently being examined */
  current: number | null;
  /** heap indices that returned a non-null match up the recursion */
  found: number[];
  lca: number | null;
}

export type LCAStep = Step<LCAData>;

/**
 * Post-order DFS: a subtree "returns" a target if it contains p or q. The first node
 * whose left and right subtrees each return a target is the lowest common ancestor.
 * `line` indexes CODE.
 */
export function lcaSteps(heap: (number | null)[], p: number, q: number): LCAStep[] {
  const steps: LCAStep[] = [];
  const found: number[] = [];
  let lca: number | null = null;

  const snap = (o: Partial<LCAData>): LCAData => ({ heap: [...heap], p, q, current: null, found: [...found], lca, ...o });
  const push = (line: number, explanation: string, data: LCAData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(0, `Find the lowest common ancestor of ${p} and ${q}.`, snap({}));

  const dfs = (i: number): number | null => {
    if (i >= heap.length || heap[i] === null) return null;
    const val = heap[i] as number;
    push(1, `Visit ${val}.`, snap({ current: i }));
    if (val === p || val === q) {
      found.push(i);
      push(2, `${val} is one of the targets — return it up.`, snap({ current: i }));
      return i;
    }
    const left = dfs(2 * i + 1);
    const right = dfs(2 * i + 2);
    if (left !== null && right !== null) {
      if (lca === null) lca = i;
      push(5, `Targets found on both sides of ${val} → LCA is ${val}.`, snap({ current: i, lca: lca }));
      return i;
    }
    const ret = left ?? right;
    if (ret !== null) found.push(i);
    push(6, `${val}: pass up the single match from ${ret !== null ? heap[ret] : "neither"} side.`, snap({ current: i }));
    return ret;
  };
  // The top-level return is the LCA: a split point (left && right) or the shallower
  // target when one is an ancestor of the other.
  const rootRet = dfs(0);
  lca = rootRet;

  push(5, lca !== null ? `Lowest common ancestor: ${heap[lca]}.` : "No common ancestor.", snap({ lca }));
  return steps;
}
