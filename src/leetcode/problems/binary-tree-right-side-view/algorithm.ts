import type { Step } from "@/core/types";

export interface RightViewData {
  heap: (number | null)[];
  current: number | null;
  visited: number[];
  /** heap indices that are the rightmost of their level */
  view: number[];
  done: boolean;
}

export type RightViewStep = Step<RightViewData>;

const val = (heap: (number | null)[], i: number) => (i < heap.length ? heap[i] : null);

/**
 * Level-order BFS; the last node dequeued on each level is what you'd see from the
 * right, so it joins the view. `line` indexes CODE.
 */
export function rightViewSteps(heap: (number | null)[]): RightViewStep[] {
  const steps: RightViewStep[] = [];
  const visited: number[] = [];
  const view: number[] = [];
  const queue: number[] = heap.length && heap[0] !== null ? [0] : [];

  const snap = (o: Partial<RightViewData>): RightViewData => ({ heap: [...heap], current: null, visited: [...visited], view: [...view], done: false, ...o });
  const push = (line: number, explanation: string, data: RightViewData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "BFS level by level; keep the last node of each level.", snap({}));

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const idx = queue.shift()!;
      visited.push(idx);
      const isLast = i === size - 1;
      if (isLast) view.push(idx);
      push(isLast ? 7 : 5, `Dequeue ${heap[idx]}${isLast ? " — rightmost, add to view." : "."}`, snap({ current: idx }));
      if (val(heap, 2 * idx + 1) !== null) queue.push(2 * idx + 1);
      if (val(heap, 2 * idx + 2) !== null) queue.push(2 * idx + 2);
    }
  }

  push(12, `Right side view: [${view.map((i) => heap[i]).join(", ")}].`, snap({ done: true }));
  return steps;
}
