import type { Step } from "@/core/types";

export interface ShortestPathData {
  grid: number[][];
  k: number;
  /** cells in the current BFS frontier, with remaining eliminations */
  frontier: { r: number; c: number; e: number }[];
  /** all cells reached so far (for shading) */
  reached: [number, number][];
  steps: number;
  answer: number | null;
}

export type ShortestPathStep = Step<ShortestPathData>;

/**
 * Shortest Path with Obstacles Elimination: BFS over states (row, col, eliminations left). Moving onto an
 * obstacle spends one elimination; a state is only enqueued once. The first time BFS reaches the corner, the
 * layer count is the answer. `line` indexes CODE.
 */
export function shortestPathSteps(grid: number[][], k: number): ShortestPathStep[] {
  const steps: ShortestPathStep[] = [];
  const R = grid.length;
  const C = grid[0].length;
  const seen = new Set([`0,0,${k}`]);
  let queue: [number, number, number][] = [[0, 0, k]];
  let stepCount = 0;
  const reached: [number, number][] = [[0, 0]];

  const snap = (o: Partial<ShortestPathData>): ShortestPathData => ({
    grid,
    k,
    frontier: queue.map(([r, c, e]) => ({ r, c, e })),
    reached: [...reached],
    steps: stepCount,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<ShortestPathData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(4, `BFS from (0,0) with ${k} elimination(s); reach the bottom-right corner fastest.`);

  while (queue.length) {
    for (const [r, c] of queue) {
      if (r === R - 1 && c === C - 1) {
        push(8, `Reached the corner in ${stepCount} step(s).`, { answer: stepCount });
        return steps;
      }
    }
    const next: [number, number, number][] = [];
    for (const [r, c, e] of queue) {
      for (const [dr, dc] of [[-1, 0], [1, 0], [0, -1], [0, 1]] as const) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr < 0 || nr >= R || nc < 0 || nc >= C) continue;
        const ne = e - grid[nr][nc];
        const key = `${nr},${nc},${ne}`;
        if (ne >= 0 && !seen.has(key)) {
          seen.add(key);
          next.push([nr, nc, ne]);
          reached.push([nr, nc]);
        }
      }
    }
    queue = next;
    stepCount++;
    push(18, `Layer ${stepCount}: ${next.length} new state(s).`);
  }

  push(20, `Corner unreachable → -1.`, { answer: -1 });
  return steps;
}
