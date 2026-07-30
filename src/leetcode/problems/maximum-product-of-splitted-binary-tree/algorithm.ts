import type { Step } from "@/core/types";

export interface SplitTreeData {
  heap: (number | null)[];
  /** subtree sum per heap index (computed lazily) */
  sub: Record<number, number>;
  total: number;
  cur: number | null;
  best: number;
  bestNode: number | null;
  answer: number | null;
}

export type SplitTreeStep = Step<SplitTreeData>;

const MOD = 1e9 + 7;

/**
 * Cutting any edge splits the tree into a subtree (sum s) and the rest (total − s), so the product is
 * s·(total − s). A post-order pass computes every subtree sum; the best product over all of them (except
 * the whole tree) is the answer. `line` indexes CODE.
 */
export function splitTreeSteps(heap: (number | null)[]): SplitTreeStep[] {
  const steps: SplitTreeStep[] = [];
  const sub: Record<number, number> = {};
  const has = (i: number) => i < heap.length && heap[i] !== null;

  const totalOf = (i: number): number => {
    if (!has(i)) return 0;
    return (heap[i] as number) + totalOf(2 * i + 1) + totalOf(2 * i + 2);
  };
  const total = totalOf(0);
  let best = 0;
  let bestNode: number | null = null;

  const snap = (o: Partial<SplitTreeData>): SplitTreeData => ({ heap, sub: { ...sub }, total, cur: null, best, bestNode, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SplitTreeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Total tree sum is ${total}. Cutting an edge above a subtree of sum s gives product s·(${total}−s).`);

  function dfs(i: number): number {
    if (!has(i)) return 0;
    const s = (heap[i] as number) + dfs(2 * i + 1) + dfs(2 * i + 2);
    sub[i] = s;
    if (i !== 0) {
      const prod = s * (total - s);
      if (prod > best) {
        best = prod;
        bestNode = i;
      }
      push(6, `Subtree at ${heap[i]} sums to ${s}: product ${s}·${total - s} = ${prod} (best ${best}).`, { cur: i });
    } else {
      push(6, `Root subtree is the whole tree — no valid cut.`, { cur: i });
    }
    return s;
  }

  dfs(0);
  push(7, `Maximum product: ${best % MOD}.`, { answer: best % MOD });
  return steps;
}
