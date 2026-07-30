import type { Step } from "@/core/types";

export interface GridGameData {
  grid: number[][];
  /** drop column of robot 1 */
  j: number | null;
  topRight: number;
  bottomLeft: number;
  best: number;
  bestJ: number | null;
  answer: number | null;
}

export type GridGameStep = Step<GridGameData>;

/**
 * Robot 1's path in a 2×n grid is just the column where it drops down: everything on the top row after
 * that column and the bottom row before it stays for robot 2. Robot 2 takes the larger of those two
 * strips, so robot 1 picks the drop column minimizing that maximum. `line` indexes CODE.
 */
export function gridGameSteps(grid: number[][]): GridGameStep[] {
  const steps: GridGameStep[] = [];
  const n = grid[0].length;
  let topRight = grid[0].reduce((a, b) => a + b, 0) - grid[0][0];
  let bottomLeft = 0;
  let best = Infinity;
  let bestJ: number | null = null;

  const snap = (o: Partial<GridGameData>): GridGameData => ({ grid, j: null, topRight, bottomLeft, best, bestJ, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<GridGameData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(4, "Robot 1 drops down at some column; robot 2 takes the larger leftover strip. Minimize that.");

  for (let j = 0; j < n; j++) {
    const second = Math.max(topRight, bottomLeft);
    if (second < best) {
      best = second;
      bestJ = j;
    }
    push(8, `Drop at column ${j}: robot 2 gets max(top-right ${topRight}, bottom-left ${bottomLeft}) = ${second} (best ${best}).`, { j, topRight, bottomLeft });
    topRight -= grid[0][j + 1] || 0;
    bottomLeft += grid[1][j];
  }

  push(12, `Robot 2's forced score with optimal play: ${best} (drop at column ${bestJ}).`, { answer: best });
  return steps;
}
