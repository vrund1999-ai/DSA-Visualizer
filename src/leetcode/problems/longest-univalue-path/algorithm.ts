import type { Step } from "@/core/types";

export interface UnivalueData {
  heap: (number | null)[];
  cur: number | null;
  best: number;
  /** heap indices forming the best univalue path so far */
  bestPath: number[];
  answer: number | null;
}

export type UnivalueStep = Step<UnivalueData>;

/**
 * For each node, the longest same-value path passing through it is the same-value arrow reaching down its
 * left plus the one down its right. A post-order DFS returns the longer single arrow (to extend a parent)
 * while tracking the best two-sided total. `line` indexes CODE.
 */
export function univalueSteps(heap: (number | null)[]): UnivalueStep[] {
  const steps: UnivalueStep[] = [];
  let best = 0;
  let bestPath: number[] = [];

  const snap = (o: Partial<UnivalueData>): UnivalueData => ({ heap, cur: null, best, bestPath: [...bestPath], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<UnivalueData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const has = (i: number) => i < heap.length && heap[i] !== null;

  // collect indices going down a same-value chain from node i toward child side, `len` steps
  const chain = (i: number, childBase: number, len: number): number[] => {
    const out: number[] = [];
    let node = i;
    for (let s = 0; s < len; s++) {
      // pick whichever child equals value along the deepest arrow
      const l = 2 * node + 1;
      const r = 2 * node + 2;
      let next = -1;
      if (s === 0) next = childBase;
      else {
        if (has(l) && heap[l] === heap[node]) next = l;
        else if (has(r) && heap[r] === heap[node]) next = r;
      }
      if (next < 0) break;
      out.push(next);
      node = next;
    }
    return out;
  };

  push(1, "For each node, combine the same-value arrows reaching down each side.");

  function arrow(i: number): number {
    if (!has(i)) return 0;
    const l = 2 * i + 1;
    const r = 2 * i + 2;
    const la = arrow(l);
    const ra = arrow(r);
    let lp = 0;
    let rp = 0;
    if (has(l) && heap[l] === heap[i]) lp = la + 1;
    if (has(r) && heap[r] === heap[i]) rp = ra + 1;
    if (lp + rp > best) {
      best = lp + rp;
      const leftChain = lp > 0 ? chain(i, l, lp) : [];
      const rightChain = rp > 0 ? chain(i, r, rp) : [];
      bestPath = [...leftChain.reverse(), i, ...rightChain];
    }
    push(9, `Node ${heap[i]}: path through it = ${lp} + ${rp} = ${lp + rp} edge(s) (best ${best}).`, { cur: i });
    return Math.max(lp, rp);
  }

  arrow(0);
  push(13, `Longest univalue path: ${best} edge(s).`, { answer: best });
  return steps;
}
