import type { Step } from "@/core/types";

export interface ShortestPathData {
  grid: number[][];
  /** distance stamped on each reached cell, -1 = unreached, -2 = wall */
  dist: number[][];
  cur: [number, number] | null;
  /** frontier cells this step */
  frontier: [number, number][];
  answer: number | null;
}

export type ShortestPathStep = Step<ShortestPathData>;

const DIRS8 = [
  [-1, -1], [-1, 0], [-1, 1],
  [0, -1], [0, 1],
  [1, -1], [1, 0], [1, 1],
];

/**
 * BFS over 8-connected clear cells; the first time the bottom-right cell is dequeued
 * its distance is the shortest clear-path length. `line` indexes CODE.
 */
export function shortestPathSteps(input: number[][]): ShortestPathStep[] {
  const steps: ShortestPathStep[] = [];
  const n = input.length;
  const grid = input.map((r) => [...r]);
  const dist: number[][] = grid.map((row) => row.map((v) => (v === 1 ? -2 : -1)));

  const snap = (o: Partial<ShortestPathData>): ShortestPathData => ({ grid, dist: dist.map((r) => [...r]), cur: null, frontier: [], answer: null, ...o });
  const push = (line: number, explanation: string, data: ShortestPathData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
    push(2, "Start or end is blocked → -1.", snap({ answer: -1 }));
    return steps;
  }

  const queue: [number, number, number][] = [[0, 0, 1]];
  dist[0][0] = 1;
  push(4, "BFS from the top-left, distance 1.", snap({ frontier: [[0, 0]] }));

  while (queue.length) {
    const [r, c, d] = queue.shift()!;
    if (r === n - 1 && c === n - 1) {
      push(7, `Reached the exit at distance ${d}.`, snap({ cur: [r, c], answer: d }));
      return steps;
    }
    const added: [number, number][] = [];
    for (const [dr, dc] of DIRS8) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nc >= 0 && nr < n && nc < n && grid[nr][nc] === 0 && dist[nr][nc] === -1) {
        dist[nr][nc] = d + 1;
        queue.push([nr, nc, d + 1]);
        added.push([nr, nc]);
      }
    }
    push(12, `Expand (${r}, ${c}) [dist ${d}] — enqueue ${added.length} neighbour(s).`, snap({ cur: [r, c], frontier: added }));
  }

  push(16, "Queue exhausted — no clear path → -1.", snap({ answer: -1 }));
  return steps;
}
