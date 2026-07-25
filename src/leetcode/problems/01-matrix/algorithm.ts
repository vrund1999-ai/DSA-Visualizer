import type { Step } from "@/core/types";

export interface ZeroOneData {
  mat: number[][];
  dist: number[][];
  cur: [number, number] | null;
  frontier: [number, number][];
  phase: "seed" | "bfs" | "done";
}

export type ZeroOneStep = Step<ZeroOneData>;

const DIRS = [[-1, 0], [1, 0], [0, -1], [0, 1]];
const INF = Number.POSITIVE_INFINITY;

/**
 * Multi-source BFS: seed the queue with every 0 cell at distance 0, then expand
 * outward. Because all sources start together, the first time a cell is reached is its
 * shortest distance to any 0. `line` indexes CODE.
 */
export function zeroOneSteps(input: number[][]): ZeroOneStep[] {
  const steps: ZeroOneStep[] = [];
  const m = input.length;
  const n = input[0].length;
  const dist = input.map((r) => r.map((v) => (v === 0 ? 0 : INF)));

  const snap = (o: Partial<ZeroOneData>): ZeroOneData => ({ mat: input.map((r) => [...r]), dist: dist.map((r) => [...r]), cur: null, frontier: [], phase: "bfs", ...o });
  const push = (line: number, explanation: string, data: ZeroOneData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  const queue: [number, number][] = [];
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) if (input[r][c] === 0) queue.push([r, c]);
  push(6, `Seed the queue with ${queue.length} zero cell(s) at distance 0.`, snap({ frontier: [...queue], phase: "seed" }));

  while (queue.length) {
    const [r, c] = queue.shift()!;
    const added: [number, number][] = [];
    for (const [dr, dc] of DIRS) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nc >= 0 && nr < m && nc < n && dist[nr][nc] > dist[r][c] + 1) {
        dist[nr][nc] = dist[r][c] + 1;
        queue.push([nr, nc]);
        added.push([nr, nc]);
      }
    }
    push(12, `Expand (${r}, ${c}) [dist ${dist[r][c]}] — set ${added.length} neighbour(s).`, snap({ cur: [r, c], frontier: added }));
  }

  push(17, "Every cell now holds its distance to the nearest 0.", snap({ phase: "done" }));
  return steps;
}
