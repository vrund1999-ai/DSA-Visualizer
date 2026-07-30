import type { Step } from "@/core/types";

export interface BrickData {
  wall: number[][];
  /** map of gap x-position -> number of rows with an edge there */
  edges: [number, number][];
  /** row currently being processed */
  rowIdx: number | null;
  /** x-position of the gap just registered */
  gapX: number | null;
  best: number;
  /** x-position achieving `best` (the line to draw) */
  bestX: number | null;
  answer: number | null;
}

export type BrickStep = Step<BrickData>;

/**
 * A vertical line crosses a brick unless it falls on a gap between bricks. Counting how many rows share
 * each internal gap position, the best line sits at the most common gap; it crosses rows − (that count)
 * bricks. `line` indexes CODE.
 */
export function brickSteps(wall: number[][]): BrickStep[] {
  const steps: BrickStep[] = [];
  const edges = new Map<number, number>();
  let best = 0;
  let bestX: number | null = null;

  const snap = (o: Partial<BrickData>): BrickData => ({ wall, edges: [...edges.entries()], rowIdx: null, gapX: null, best, bestX, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BrickData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Count how many rows have a gap at each internal x-position.");

  for (let r = 0; r < wall.length; r++) {
    let x = 0;
    for (let i = 0; i < wall[r].length - 1; i++) {
      x += wall[r][i];
      const count = (edges.get(x) || 0) + 1;
      edges.set(x, count);
      if (count > best) {
        best = count;
        bestX = x;
      }
      push(8, `Row ${r}: gap at x=${x} now shared by ${count} row(s).`, { rowIdx: r, gapX: x });
    }
  }

  const answer = wall.length - best;
  push(11, `Best gap at x=${bestX} is shared by ${best} rows → cross ${answer} brick(s).`, { answer });
  return steps;
}
