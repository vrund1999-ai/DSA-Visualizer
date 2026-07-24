import type { Step } from "@/core/types";

export interface NextPointerData {
  heap: (number | null)[];
  current: number | null;
  target: number | null;
  /** heap index -> heap index of the node its `next` points to */
  next: Record<number, number>;
}

export type NextPointerStep = Step<NextPointerData>;

/**
 * Perfect binary tree: for each node connect left.next = right, and right.next =
 * parent.next.left (the node across the gap). Walk level by level using the `next`
 * chain we just built — no queue needed. `line` indexes CODE.
 */
export function nextPointerSteps(heap: (number | null)[]): NextPointerStep[] {
  const steps: NextPointerStep[] = [];
  const next: Record<number, number> = {};
  const exists = (i: number) => i < heap.length && heap[i] !== null;

  const snap = (o: Partial<NextPointerData>): NextPointerData => ({ heap: [...heap], current: null, target: null, next: { ...next }, ...o });
  const push = (line: number, explanation: string, data: NextPointerData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "Connect each level's nodes left to right using the level above.", snap({}));

  if (exists(0)) {
    let leftmost = 0;
    while (exists(2 * leftmost + 1)) {
      let head: number | null = leftmost;
      while (head !== null) {
        const l = 2 * head + 1;
        const r = 2 * head + 2;
        next[l] = r;
        push(6, `Same parent: ${heap[l]}.next → ${heap[r]}.`, snap({ current: l, target: r }));
        const headNext: number | undefined = next[head];
        if (headNext !== undefined) {
          const acrossChild = 2 * headNext + 1;
          next[r] = acrossChild;
          push(8, `Across the gap: ${heap[r]}.next → ${heap[acrossChild]}.`, snap({ current: r, target: acrossChild }));
        }
        head = headNext ?? null;
      }
      leftmost = 2 * leftmost + 1;
    }
  }

  push(13, "Every node's next pointer is set.", snap({}));
  return steps;
}
