import type { Step } from "@/core/types";

export interface SameTreeInput {
  p: (number | null)[];
  q: (number | null)[];
}

export interface SameTreeData {
  p: (number | null)[];
  q: (number | null)[];
  current: number | null;
  matched: number[];
  mismatch: number | null;
  result: boolean | null;
}

export type SameTreeStep = Step<SameTreeData>;

const val = (heap: (number | null)[], i: number): number | null => (i < heap.length ? heap[i] : null);

/**
 * Walk both trees in lockstep: at each position both nodes must be absent, or
 * both present with equal values, then recurse on matching children. Any
 * divergence means the trees differ. `line` indexes CODE.
 */
export function sameTreeSteps(input: SameTreeInput): SameTreeStep[] {
  const { p, q } = input;
  const steps: SameTreeStep[] = [];
  const matched: number[] = [];
  let failed = false;

  const snap = (o: Partial<SameTreeData>): SameTreeData => ({
    p: [...p],
    q: [...q],
    current: null,
    matched: [...matched],
    mismatch: null,
    result: null,
    ...o,
  });
  const push = (line: number, explanation: string, data: SameTreeData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  const walk = (i: number): boolean => {
    const pv = val(p, i);
    const qv = val(q, i);
    if (pv === null && qv === null) return true;
    if (pv === null || qv === null || pv !== qv) {
      failed = true;
      push(2, `Mismatch at node ${i}: ${pv ?? "∅"} vs ${qv ?? "∅"} — trees differ.`, snap({ current: i, mismatch: i, result: false }));
      return false;
    }
    push(2, `Node ${i}: ${pv} = ${qv} — matches, recurse on children.`, snap({ current: i }));
    matched.push(i);
    if (!walk(2 * i + 1)) return false;
    if (!walk(2 * i + 2)) return false;
    return true;
  };

  push(0, "Compare both trees node by node in the same positions.", snap({ current: 0 }));
  const ok = walk(0);
  if (!failed) push(1, ok ? "Every position matched — the trees are identical." : "Trees differ.", snap({ result: ok }));
  return steps;
}
