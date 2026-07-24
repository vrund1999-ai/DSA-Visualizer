import type { Step } from "@/core/types";

export interface RottingData {
  grid: number[][];
  justRotted: [number, number][];
  minutes: number;
  fresh: number;
  answer: number | null;
}

export type RottingStep = Step<RottingData>;

const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

/**
 * Multi-source BFS: all initially-rotten oranges start on the frontier. Each
 * minute, every current-frontier orange rots its fresh neighbours, which form
 * the next frontier. The number of BFS layers is the time to rot everything (or
 * -1 if any orange stays fresh). `line` indexes CODE.
 */
export function rottingSteps(input: number[][]): RottingStep[] {
  const grid = input.map((row) => [...row]);
  const R = grid.length;
  const C = R ? grid[0].length : 0;
  const steps: RottingStep[] = [];
  let fresh = 0;
  let frontier: [number, number][] = [];

  for (let r = 0; r < R; r++)
    for (let c = 0; c < C; c++) {
      if (grid[r][c] === 2) frontier.push([r, c]);
      else if (grid[r][c] === 1) fresh++;
    }

  let minutes = 0;
  const snap = (justRotted: [number, number][], answer: number | null): RottingData => ({
    grid: grid.map((row) => [...row]),
    justRotted: justRotted.map((p) => [...p] as [number, number]),
    minutes,
    fresh,
    answer,
  });
  const push = (line: number, explanation: string, data: RottingData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [], metrics: { minute: minutes, fresh } });
  };

  push(4, `${frontier.length} rotten to start, ${fresh} fresh orange(s).`, snap(frontier, null));

  while (frontier.length && fresh) {
    const next: [number, number][] = [];
    for (const [r, c] of frontier) {
      for (const [dr, dc] of DIRS) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < R && nc >= 0 && nc < C && grid[nr][nc] === 1) {
          grid[nr][nc] = 2;
          fresh--;
          next.push([nr, nc]);
        }
      }
    }
    minutes++;
    push(11, next.length ? `Minute ${minutes}: ${next.length} orange(s) rot. ${fresh} fresh left.` : `Minute ${minutes}: nothing new rots.`, snap(next, null));
    frontier = next;
  }

  const answer = fresh === 0 ? minutes : -1;
  push(13, fresh === 0 ? `All oranges rotted in ${minutes} minute(s).` : `${fresh} orange(s) never rot — return -1.`, snap([], answer));
  return steps;
}
