import type { Step } from "@/core/types";

export interface MaxWidthData {
  heap: (number | null)[];
  /** heap indices on the current level */
  level: number[];
  /** position index assigned to each level node (aligned with `level`) */
  positions: number[];
  depth: number;
  levelWidth: number | null;
  best: number;
  answer: number | null;
}

export type MaxWidthStep = Step<MaxWidthData>;

/**
 * BFS assigning each node a position index as if the tree were complete (left child
 * 2p, right child 2p+1). A level's width is last − first + 1 of those indices; the
 * maximum over levels is the answer. `line` indexes CODE.
 */
export function maxWidthSteps(heap: (number | null)[]): MaxWidthStep[] {
  const steps: MaxWidthStep[] = [];

  const snap = (o: Partial<MaxWidthData>): MaxWidthData => ({ heap: [...heap], level: [], positions: [], depth: 0, levelWidth: null, best: 0, answer: null, ...o });
  const push = (line: number, explanation: string, data: MaxWidthData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  if (!heap.length || heap[0] === null) {
    push(14, "Empty tree — width 0.", snap({ answer: 0 }));
    return steps;
  }

  let level = [0];
  let positions = [0];
  let depth = 0;
  let best = 0;

  push(2, "BFS assigning complete-tree position indices per node.", snap({ level, positions, depth, best }));

  while (level.length) {
    const width = positions[positions.length - 1] - positions[0] + 1;
    best = Math.max(best, width);
    push(6, `Level ${depth}: positions ${positions[0]}..${positions[positions.length - 1]} → width ${width}.`, snap({ level, positions, depth, levelWidth: width, best }));

    const nextLevel: number[] = [];
    const nextPos: number[] = [];
    for (let k = 0; k < level.length; k++) {
      const i = level[k];
      const p = positions[k];
      if (2 * i + 1 < heap.length && heap[2 * i + 1] !== null) { nextLevel.push(2 * i + 1); nextPos.push(2 * p); }
      if (2 * i + 2 < heap.length && heap[2 * i + 2] !== null) { nextLevel.push(2 * i + 2); nextPos.push(2 * p + 1); }
    }
    level = nextLevel;
    positions = nextPos;
    depth++;
  }

  push(14, `Maximum width: ${best}.`, snap({ best, answer: best }));
  return steps;
}
