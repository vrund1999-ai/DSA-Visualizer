import type { Step } from "@/core/types";

export interface LeftLeafData {
  heap: (number | null)[];
  cur: number | null;
  /** heap indices confirmed as counted left leaves */
  counted: number[];
  sum: number;
  answer: number | null;
}

export type LeftLeafStep = Step<LeftLeafData>;

/**
 * A left leaf is a node with no children that is its parent's left child. One DFS carries a flag for
 * whether each node was reached as a left child, adding a node's value only when it is both a leaf and a
 * left child. `line` indexes CODE.
 */
export function leftLeafSteps(heap: (number | null)[]): LeftLeafStep[] {
  const steps: LeftLeafStep[] = [];
  const counted: number[] = [];
  let sum = 0;

  const snap = (o: Partial<LeftLeafData>): LeftLeafData => ({ heap, cur: null, counted: [...counted], sum, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<LeftLeafData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const has = (i: number) => i < heap.length && heap[i] !== null;

  push(1, "DFS carrying whether each node is a left child; sum leaf values that are left children.");

  function dfs(i: number, isLeft: boolean) {
    if (!has(i)) return;
    const l = 2 * i + 1;
    const r = 2 * i + 2;
    if (!has(l) && !has(r)) {
      if (isLeft) {
        sum += heap[i] as number;
        counted.push(i);
        push(5, `${heap[i]} is a left leaf → add it (sum ${sum}).`, { cur: i });
      } else {
        push(4, `${heap[i]} is a leaf but a right child — skip.`, { cur: i });
      }
      return;
    }
    push(2, `Visit ${heap[i]} (internal node).`, { cur: i });
    dfs(l, true);
    dfs(r, false);
  }

  dfs(0, false);
  push(12, `Sum of left leaves: ${sum}.`, { answer: sum });
  return steps;
}
