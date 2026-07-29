import type { Step } from "@/core/types";

export interface BottomLeftData {
  heap: (number | null)[];
  /** heap indices in the current BFS level */
  level: number[];
  /** heap index of the current leftmost candidate */
  leftmost: number | null;
  depth: number;
  answer: number | null;
}

export type BottomLeftStep = Step<BottomLeftData>;

/**
 * A level-order traversal visits each depth in turn, and the first node dequeued at each level is that
 * level's leftmost. Whatever leftmost value survives once the queue empties belongs to the deepest
 * level — the answer. `line` indexes CODE.
 */
export function bottomLeftSteps(heap: (number | null)[]): BottomLeftStep[] {
  const steps: BottomLeftStep[] = [];
  const valid = (i: number) => i < heap.length && heap[i] !== null;

  let level = [0];
  let leftmost = 0;
  let depth = 0;

  const snap = (o: Partial<BottomLeftData>): BottomLeftData => ({ heap, level: [...level], leftmost, depth, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BottomLeftData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "BFS level by level; the first node of each level is its leftmost.");

  while (level.length) {
    leftmost = level[0];
    push(4, `Depth ${depth}: leftmost node is ${heap[leftmost]}.`, { leftmost, depth });
    const next: number[] = [];
    for (const i of level) {
      if (valid(2 * i + 1)) next.push(2 * i + 1);
      if (valid(2 * i + 2)) next.push(2 * i + 2);
    }
    level = next;
    depth++;
  }

  push(12, `Bottom-left value: ${heap[leftmost]}.`, { answer: heap[leftmost]! });
  return steps;
}
