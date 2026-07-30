import type { Step } from "@/core/types";

export interface KnightMovesData {
  x: number;
  y: number;
  /** display bounds */
  minR: number;
  maxR: number;
  minC: number;
  maxC: number;
  /** BFS distance per "r,c", -1 if unvisited */
  dist: Record<string, number>;
  frontier: [number, number][];
  moves: number;
  answer: number | null;
}

export type KnightMovesStep = Step<KnightMovesData>;

const KNIGHT = [
  [1, 2],
  [2, 1],
  [-1, 2],
  [2, -1],
  [1, -2],
  [-2, 1],
  [-1, -2],
  [-2, -1],
];

/**
 * The fewest knight moves is a shortest path, so BFS expands outward one ring at a time from the origin;
 * the ring on which the target first appears is the answer. The search is bounded to a box around the
 * target since the optimal path never wanders far. `line` indexes CODE.
 */
export function knightMovesSteps(x: number, y: number): KnightMovesStep[] {
  const steps: KnightMovesStep[] = [];
  const minR = Math.min(0, y) - 2;
  const maxR = Math.max(0, y) + 2;
  const minC = Math.min(0, x) - 2;
  const maxC = Math.max(0, x) + 2;
  const dist: Record<string, number> = { "0,0": 0 };
  let frontier: [number, number][] = [[0, 0]];
  let moves = 0;

  const snap = (o: Partial<KnightMovesData>): KnightMovesData => ({ x, y, minR, maxR, minC, maxC, dist: { ...dist }, frontier: [...frontier], moves, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<KnightMovesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `BFS from the origin toward (${x}, ${y}), one ring of knight moves per level.`);

  while (frontier.length) {
    if (frontier.some(([r, c]) => r === y && c === x)) {
      push(6, `Reached (${x}, ${y}) after ${moves} move(s).`, { answer: moves });
      return steps;
    }
    const next: [number, number][] = [];
    for (const [r, c] of frontier) {
      for (const [dr, dc] of KNIGHT) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr < minR || nr > maxR || nc < minC || nc > maxC) continue;
        const key = `${nr},${nc}`;
        if (!(key in dist)) {
          dist[key] = moves + 1;
          next.push([nr, nc]);
        }
      }
    }
    frontier = next;
    moves++;
    push(15, `Advance to ring ${moves}.`);
  }

  push(17, "Target unreachable within bounds.", { answer: -1 });
  return steps;
}
