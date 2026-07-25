import type { Step } from "@/core/types";

export interface FoodPathData {
  grid: string[][];
  dist: number[][];
  cur: [number, number] | null;
  frontier: [number, number][];
  answer: number | null;
}

export type FoodPathStep = Step<FoodPathData>;

const DIRS = [[-1, 0], [1, 0], [0, -1], [0, 1]];

/**
 * Plain 4-directional BFS from the '*' cell across open ('O') cells, stopping at the
 * first '#'. BFS guarantees that first food cell is the nearest. `line` indexes CODE.
 */
export function foodPathSteps(input: string[][]): FoodPathStep[] {
  const steps: FoodPathStep[] = [];
  const grid = input.map((r) => [...r]);
  const rows = grid.length;
  const cols = grid[0].length;
  const dist = grid.map((r) => r.map(() => -1));

  let sr = 0;
  let sc = 0;
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) if (grid[r][c] === "*") { sr = r; sc = c; }

  const snap = (o: Partial<FoodPathData>): FoodPathData => ({ grid, dist: dist.map((r) => [...r]), cur: null, frontier: [], answer: null, ...o });
  const push = (line: number, explanation: string, data: FoodPathData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  const queue: [number, number, number][] = [[sr, sc, 0]];
  dist[sr][sc] = 0;
  push(3, "BFS from '*' to the nearest food '#'.", snap({ frontier: [[sr, sc]] }));

  while (queue.length) {
    const [r, c, d] = queue.shift()!;
    if (grid[r][c] === "#") {
      push(6, `Reached food at (${r}, ${c}) in ${d} step(s).`, snap({ cur: [r, c], answer: d }));
      return steps;
    }
    const added: [number, number][] = [];
    for (const [dr, dc] of DIRS) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] !== "X" && dist[nr][nc] === -1) {
        dist[nr][nc] = d + 1;
        queue.push([nr, nc, d + 1]);
        added.push([nr, nc]);
      }
    }
    push(9, `Expand (${r}, ${c}) [dist ${d}] — add ${added.length} cell(s).`, snap({ cur: [r, c], frontier: added }));
  }

  push(13, "No path to food → -1.", snap({ answer: -1 }));
  return steps;
}
