import type { Step } from "@/core/types";

export interface UniquePathsData {
  grid: number[][];
  /** cells currently on the DFS path (visited) */
  path: [number, number][];
  /** cell currently being visited */
  active: [number, number] | null;
  paths: number;
  answer: number | null;
}

export type UniquePathsStep = Step<UniquePathsData>;

const MAX_STEPS = 400;

/**
 * Unique Paths III: count walks from the start (1) to the end (2) that step on every non-obstacle cell
 * exactly once. Backtracking marks each visited cell, recurses to neighbours, and counts a success only when
 * the end is reached with no empty cells left. `line` indexes CODE.
 */
export function uniquePathsSteps(input: number[][]): UniquePathsStep[] {
  const steps: UniquePathsStep[] = [];
  const grid = input.map((row) => [...row]);
  const R = grid.length;
  const C = grid[0].length;
  let empty = 1;
  let sr = 0;
  let sc = 0;
  for (let r = 0; r < R; r++)
    for (let c = 0; c < C; c++) {
      if (grid[r][c] === 0) empty++;
      else if (grid[r][c] === 1) {
        sr = r;
        sc = c;
      }
    }
  let paths = 0;
  const path: [number, number][] = [];

  const snap = (o: Partial<UniquePathsData>): UniquePathsData => ({
    grid: grid.map((r) => [...r]),
    path: [...path],
    active: null,
    paths,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<UniquePathsData> = {}) => {
    if (steps.length < MAX_STEPS) steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(6, `Walk from start covering all ${empty} non-obstacle cell(s), ending at the target.`);

  const dfs = (r: number, c: number, left: number) => {
    if (r < 0 || r >= R || c < 0 || c >= C || grid[r][c] === -1) return;
    if (grid[r][c] === 2) {
      if (left === 0) {
        paths++;
        push(11, `Reached target having covered every cell → path #${paths}.`, { active: [r, c] });
      }
      return;
    }
    const wasStart = grid[r][c];
    grid[r][c] = -1;
    path.push([r, c]);
    push(14, `Visit (${r}, ${c}); ${left - 1} cell(s) left to cover.`, { active: [r, c] });
    for (const [dr, dc] of [[-1, 0], [1, 0], [0, -1], [0, 1]] as const) dfs(r + dr, c + dc, left - 1);
    grid[r][c] = wasStart;
    path.pop();
  };

  dfs(sr, sc, empty);
  push(20, `Total distinct paths = ${paths}.`, { answer: paths });
  return steps;
}
