import type { Step } from "@/core/types";

export interface CousinsData {
  heap: (number | null)[];
  x: number;
  y: number;
  /** heap indices on the level currently scanned */
  level: number[];
  depth: number;
  /** heap indices of x and y once located */
  xIdx: number | null;
  yIdx: number | null;
  answer: boolean | null;
}

export type CousinsStep = Step<CousinsData>;

const parentOf = (i: number) => (i === 0 ? -1 : Math.floor((i - 1) / 2));

/**
 * BFS level by level. Two nodes are cousins if they appear on the same level (equal
 * depth) but have different parents. As soon as a level contains either target we can
 * decide. `line` indexes CODE.
 */
export function cousinsSteps(heap: (number | null)[], x: number, y: number): CousinsStep[] {
  const steps: CousinsStep[] = [];

  const snap = (o: Partial<CousinsData>): CousinsData => ({ heap: [...heap], x, y, level: [], depth: 0, xIdx: null, yIdx: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: CousinsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  let level = heap.length && heap[0] !== null ? [0] : [];
  let depth = 0;
  push(1, `Are ${x} and ${y} cousins? (same depth, different parents)`, snap({ level, depth }));

  while (level.length) {
    let xIdx: number | null = null;
    let yIdx: number | null = null;
    for (const i of level) {
      if (heap[i] === x) xIdx = i;
      if (heap[i] === y) yIdx = i;
    }
    push(9, `Depth ${depth}: values [${level.map((i) => heap[i]).join(", ")}].`, snap({ level, depth, xIdx, yIdx }));

    if (xIdx !== null || yIdx !== null) {
      let answer = false;
      let explanation = `Only one target at this depth → not cousins.`;
      if (xIdx !== null && yIdx !== null) {
        answer = parentOf(xIdx) !== parentOf(yIdx);
        explanation = answer ? `Same depth, different parents → cousins.` : `Same depth but same parent (siblings) → not cousins.`;
      }
      push(11, explanation, snap({ level, depth, xIdx, yIdx, answer }));
      return steps;
    }

    const next: number[] = [];
    for (const i of level) {
      if (2 * i + 1 < heap.length && heap[2 * i + 1] !== null) next.push(2 * i + 1);
      if (2 * i + 2 < heap.length && heap[2 * i + 2] !== null) next.push(2 * i + 2);
    }
    level = next;
    depth++;
  }

  push(14, "Targets not found → false.", snap({ answer: false }));
  return steps;
}
