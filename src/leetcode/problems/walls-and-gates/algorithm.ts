import type { Step } from "@/core/types";

export const INF = 2147483647;

export interface WallsData {
  rooms: number[][];
  /** cells filled at this BFS level */
  frontier: [number, number][];
  level: number;
  done: boolean;
}

export type WallsStep = Step<WallsData>;

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/**
 * Filling every room with its distance to the nearest gate is a multi-source BFS: seed the queue with all
 * gates at distance 0 and expand outward in rings. The first time a wave reaches an empty room, that
 * distance is minimal. `line` indexes CODE.
 */
export function wallsSteps(input: number[][]): WallsStep[] {
  const steps: WallsStep[] = [];
  const rooms = input.map((r) => [...r]);
  const R = rooms.length;
  const C = rooms[0].length;

  const snap = (o: Partial<WallsData>): WallsData => ({ rooms: rooms.map((r) => [...r]), frontier: [], level: 0, done: false, ...o });
  const push = (line: number, explanation: string, o: Partial<WallsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  let frontier: [number, number][] = [];
  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (rooms[r][c] === 0) frontier.push([r, c]);
  push(5, `Seed BFS from ${frontier.length} gate(s).`, { frontier: [...frontier], level: 0 });

  let level = 0;
  while (frontier.length) {
    const next: [number, number][] = [];
    for (const [r, c] of frontier) {
      for (const [dr, dc] of DIRS) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nc >= 0 && nr < R && nc < C && rooms[nr][nc] === INF) {
          rooms[nr][nc] = level + 1;
          next.push([nr, nc]);
        }
      }
    }
    level++;
    if (next.length) {
      frontier = next;
      push(10, `Ring ${level}: fill ${next.length} room(s) at distance ${level}.`, { frontier: [...next], level });
    } else {
      frontier = next;
    }
  }

  push(15, "Every reachable room now holds its distance to the nearest gate.", { done: true });
  return steps;
}
