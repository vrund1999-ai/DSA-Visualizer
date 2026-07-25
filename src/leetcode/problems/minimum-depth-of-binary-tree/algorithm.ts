import type { Step } from "@/core/types";

export interface MinDepthData {
  heap: (number | null)[];
  level: number[];
  depth: number;
  current: number | null;
  /** the first leaf found */
  leaf: number | null;
  answer: number | null;
}

export type MinDepthStep = Step<MinDepthData>;

/**
 * BFS explores level by level, so the first leaf it reaches sits at the minimum depth
 * — no need to explore deeper. `line` indexes CODE.
 */
export function minDepthSteps(heap: (number | null)[]): MinDepthStep[] {
  const steps: MinDepthStep[] = [];

  const snap = (o: Partial<MinDepthData>): MinDepthData => ({ heap: [...heap], level: [], depth: 0, current: null, leaf: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: MinDepthData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  if (!heap.length || heap[0] === null) {
    push(1, "Empty tree — depth 0.", snap({ answer: 0 }));
    return steps;
  }

  let level = [0];
  let depth = 1;
  push(2, "BFS: the first leaf reached is at the minimum depth.", snap({ level, depth }));

  while (level.length) {
    for (const i of level) {
      const hasLeft = 2 * i + 1 < heap.length && heap[2 * i + 1] !== null;
      const hasRight = 2 * i + 2 < heap.length && heap[2 * i + 2] !== null;
      if (!hasLeft && !hasRight) {
        push(7, `${heap[i]} is a leaf at depth ${depth} → answer ${depth}.`, snap({ level, depth, current: i, leaf: i, answer: depth }));
        return steps;
      }
      push(6, `${heap[i]} has children — keep going.`, snap({ level, depth, current: i }));
    }
    const next: number[] = [];
    for (const i of level) {
      if (2 * i + 1 < heap.length && heap[2 * i + 1] !== null) next.push(2 * i + 1);
      if (2 * i + 2 < heap.length && heap[2 * i + 2] !== null) next.push(2 * i + 2);
    }
    level = next;
    depth++;
  }

  push(13, "Traversal complete.", snap({}));
  return steps;
}
