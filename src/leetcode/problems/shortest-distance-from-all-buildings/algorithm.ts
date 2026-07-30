import type { Step } from "@/core/types";

export interface BuildingsData {
  grid: number[][];
  dist: number[][];
  reach: number[][];
  buildings: number;
  /** building just processed */
  curBuilding: [number, number] | null;
  best: [number, number] | null;
  answer: number | null;
}

export type BuildingsStep = Step<BuildingsData>;

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/**
 * From each building, a BFS records its distance to every reachable empty cell and marks that the cell
 * was reached. Summing distances and counting reaches across all buildings, the answer is the smallest
 * total distance among empty cells reachable from every building. `line` indexes CODE.
 */
export function buildingsSteps(grid: number[][]): BuildingsStep[] {
  const steps: BuildingsStep[] = [];
  const R = grid.length;
  const C = grid[0].length;
  const dist = Array.from({ length: R }, () => new Array(C).fill(0));
  const reach = Array.from({ length: R }, () => new Array(C).fill(0));
  let buildings = 0;

  const snap = (o: Partial<BuildingsData>): BuildingsData => ({ grid, dist: dist.map((r) => [...r]), reach: reach.map((r) => [...r]), buildings, curBuilding: null, best: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BuildingsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "For each building, BFS out to empty cells, accumulating distance and reach counts.");

  for (let br = 0; br < R; br++) {
    for (let bc = 0; bc < C; bc++) {
      if (grid[br][bc] !== 1) continue;
      buildings++;
      const seen = Array.from({ length: R }, () => new Array(C).fill(false));
      seen[br][bc] = true;
      let queue: [number, number][] = [[br, bc]];
      let step = 0;
      while (queue.length) {
        step++;
        const next: [number, number][] = [];
        for (const [r, c] of queue) {
          for (const [dr, dc] of DIRS) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nc >= 0 && nr < R && nc < C && !seen[nr][nc] && grid[nr][nc] === 0) {
              seen[nr][nc] = true;
              dist[nr][nc] += step;
              reach[nr][nc] += 1;
              next.push([nr, nc]);
            }
          }
        }
        queue = next;
      }
      push(8, `BFS from building (${br},${bc}) done; distances accumulated.`, { curBuilding: [br, bc] });
    }
  }

  let best = Infinity;
  let bestCell: [number, number] | null = null;
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (grid[r][c] === 0 && reach[r][c] === buildings && dist[r][c] < best) {
        best = dist[r][c];
        bestCell = [r, c];
      }
    }
  }
  const answer = best === Infinity ? -1 : best;
  push(13, answer === -1 ? "No cell reaches every building → -1." : `Best empty cell has total distance ${answer}.`, { best: bestCell, answer });
  return steps;
}
