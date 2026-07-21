import type { Step } from "@/core/types";

export interface LevelOrderData {
  heap: (number | null)[];
  current: number | null;
  queue: number[];
  visited: number[];
  levels: number[][];
}

export type LevelOrderStep = Step<LevelOrderData>;

const val = (heap: (number | null)[], i: number): number | null =>
  i < heap.length ? heap[i] : null;

/**
 * Breadth-first search with a queue: process the tree one level at a time by
 * draining exactly the nodes already queued before enqueuing their children.
 * `line` indexes CODE.
 */
export function levelOrderSteps(heap: (number | null)[]): LevelOrderStep[] {
  const steps: LevelOrderStep[] = [];
  const levels: number[][] = [];
  const visited: number[] = [];
  const queue: number[] = heap.length && heap[0] !== null ? [0] : [];

  const snap = (o: Partial<LevelOrderData>): LevelOrderData => ({
    heap: [...heap],
    current: null,
    queue: [...queue],
    visited: [...visited],
    levels: levels.map((l) => [...l]),
    ...o,
  });
  const push = (line: number, explanation: string, data: LevelOrderData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [], metrics: { levels: levels.length } });
  };

  push(1, "Seed a queue with the root and process level by level.", snap({}));

  while (queue.length) {
    const size = queue.length;
    const level: number[] = [];
    push(3, `Start a new level with ${size} node(s) in the queue.`, snap({}));
    for (let k = 0; k < size; k++) {
      const i = queue.shift()!;
      visited.push(i);
      level.push(heap[i] as number);
      push(6, `Dequeue ${heap[i]} and add it to this level.`, snap({ current: i }));
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (val(heap, left) !== null) queue.push(left);
      if (val(heap, right) !== null) queue.push(right);
    }
    levels.push(level);
    push(10, `Level complete: [${level.join(", ")}].`, snap({}));
  }

  push(12, `Traversal done — ${levels.length} level(s).`, snap({}));
  return steps;
}
