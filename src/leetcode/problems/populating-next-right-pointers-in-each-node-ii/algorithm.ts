import type { Step } from "@/core/types";

export interface NextPointerIIData {
  heap: (number | null)[];
  /** heap index -> heap index its `next` points to */
  next: Record<number, number>;
  /** node currently linking its children */
  current: number | null;
  /** child just linked */
  linked: number | null;
}

export type NextPointerIIStep = Step<NextPointerIIData>;

/**
 * Unlike the perfect-tree version, the tree here may be arbitrary, so we thread the
 * next level with a dummy tail while walking the current level through the `next`
 * pointers we already built. `line` indexes CODE.
 */
export function nextPointerIISteps(heap: (number | null)[]): NextPointerIIStep[] {
  const steps: NextPointerIIStep[] = [];
  const next: Record<number, number> = {};
  const exists = (i: number) => i < heap.length && heap[i] !== null;

  const snap = (o: Partial<NextPointerIIData>): NextPointerIIData => ({ heap: [...heap], next: { ...next }, current: null, linked: null, ...o });
  const push = (line: number, explanation: string, data: NextPointerIIData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Link each level left to right by threading the level below.", snap({}));

  // walk levels using our own `next` map; start with the root as the level head
  let head: number | null = exists(0) ? 0 : null;
  while (head !== null) {
    let tail: number | null = null; // last linked node on the next level
    let n: number | null = head;
    while (n !== null) {
      for (const child of [2 * n + 1, 2 * n + 2]) {
        if (exists(child)) {
          if (tail !== null) {
            next[tail] = child;
            push(6, `Link ${heap[tail]} → ${heap[child]} on the next level.`, snap({ current: n, linked: child }));
          } else {
            push(6, `${heap[child]} starts the next level.`, snap({ current: n, linked: child }));
          }
          tail = child;
        }
      }
      n = next[n] ?? null;
    }
    // descend to the leftmost child of the current level
    let nextHead: number | null = null;
    for (let m: number | null = head; m !== null; m = next[m] ?? null) {
      if (exists(2 * m + 1)) { nextHead = 2 * m + 1; break; }
      if (exists(2 * m + 2)) { nextHead = 2 * m + 2; break; }
    }
    head = nextHead;
    if (head !== null) push(9, `Descend to the next level (head ${heap[head]}).`, snap({}));
  }

  push(11, "Every node's next pointer is set.", snap({}));
  return steps;
}
