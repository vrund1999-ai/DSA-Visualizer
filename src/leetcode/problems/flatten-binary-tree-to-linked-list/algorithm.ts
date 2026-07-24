import type { Step } from "@/core/types";

export interface FlattenData {
  heap: (number | null)[];
  /** node just linked into the list */
  current: number | null;
  /** heap values in the flattened order built so far (head first) */
  list: number[];
  done: boolean;
}

export type FlattenStep = Step<FlattenData>;

/**
 * Flatten to a right-skewed list in preorder (node, left, right). Visiting in reverse
 * preorder (right, left, node) and prepending each node builds the correct order with
 * a single running `prev`. `line` indexes CODE.
 */
export function flattenSteps(heap: (number | null)[]): FlattenStep[] {
  const steps: FlattenStep[] = [];
  const list: number[] = [];

  const snap = (o: Partial<FlattenData>): FlattenData => ({ heap: [...heap], current: null, list: [...list], done: false, ...o });
  const push = (line: number, explanation: string, data: FlattenData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Build the preorder list via a reverse-preorder DFS.", snap({}));

  const dfs = (i: number) => {
    if (i >= heap.length || heap[i] === null) return;
    dfs(2 * i + 2);
    dfs(2 * i + 1);
    list.unshift(heap[i] as number);
    push(7, `Prepend ${heap[i]} — it becomes the new list head.`, snap({ current: i }));
  };
  dfs(0);

  push(10, `Flattened order: [${list.join(" → ")}].`, snap({ done: true }));
  return steps;
}
