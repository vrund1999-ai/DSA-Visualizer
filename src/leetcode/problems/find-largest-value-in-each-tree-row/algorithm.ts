import type { Step } from "@/core/types";

export interface TreeRowData {
  heap: (number | null)[];
  /** indices in the level currently being scanned */
  level: number[];
  /** index being read */
  cur: number | null;
  best: number | null;
  res: number[];
  answer: number[] | null;
}

export type TreeRowStep = Step<TreeRowData>;

/**
 * The largest value in each row is a plain level-order (BFS) sweep: process one depth at a time,
 * tracking the max as each node in the level is read, then descend to the collected children.
 * `heap` is the tree as a heap array (children of i at 2i+1 / 2i+2). `line` indexes CODE.
 */
export function treeRowSteps(heap: (number | null)[]): TreeRowStep[] {
  const steps: TreeRowStep[] = [];
  const res: number[] = [];

  const snap = (o: Partial<TreeRowData>): TreeRowData => ({ heap, level: [], cur: null, best: null, res: [...res], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<TreeRowData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (heap.length === 0 || heap[0] === null) {
    push(1, "Empty tree → [].", { answer: [] });
    return steps;
  }

  let level = [0];
  push(3, "Start BFS at the root level.", { level });

  while (level.length) {
    let best = -Infinity;
    const next: number[] = [];
    for (const i of level) {
      best = Math.max(best, heap[i] as number);
      push(8, `Read ${heap[i]}; row best so far ${best}.`, { level, cur: i, best });
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      if (l < heap.length && heap[l] !== null) next.push(l);
      if (r < heap.length && heap[r] !== null) next.push(r);
    }
    res.push(best);
    push(12, `Row maximum is ${best}.`, { level, best });
    level = next;
    if (level.length) push(13, "Descend to the next row.", { level });
  }

  push(15, `Row maxima: [${res.join(", ")}].`, { answer: [...res] });
  return steps;
}
