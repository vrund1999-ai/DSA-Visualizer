import type { Step } from "@/core/types";

export interface SnakesData {
  board: number[][];
  n: number;
  /** BFS distance per square (1..n*n), -1 = unvisited */
  dist: number[];
  /** squares in the current BFS ring */
  frontier: number[];
  /** the square just reached, and whether via a snake/ladder */
  reached: number | null;
  jumped: boolean;
  moves: number;
  answer: number | null;
}

export type SnakesStep = Step<SnakesData>;

/**
 * Each dice roll is one move, so the fewest moves to the last square is a breadth-first search where
 * every square connects to the six ahead of it (following any snake or ladder that lands there). BFS
 * expands ring by ring, so the first time we reach n² gives the minimum. `line` indexes CODE.
 */
export function snakesSteps(board: number[][]): SnakesStep[] {
  const steps: SnakesStep[] = [];
  const n = board.length;
  const cell = (s: number): [number, number] => {
    const row = Math.floor((s - 1) / n);
    const col = (s - 1) % n;
    const r = n - 1 - row;
    const c = row % 2 === 0 ? col : n - 1 - col;
    return [r, c];
  };
  const dist = new Array(n * n + 1).fill(-1);
  dist[1] = 0;
  let frontier = [1];

  const snap = (o: Partial<SnakesData>): SnakesData => ({ board, n, dist: [...dist], frontier: [...frontier], reached: null, jumped: false, moves: 0, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SnakesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(5, "BFS from square 1; each dice roll is one move (following snakes & ladders).");

  let moves = 0;
  while (frontier.length) {
    const next: number[] = [];
    for (const s of frontier) {
      for (let d = 1; d <= 6; d++) {
        let t = s + d;
        if (t > n * n) continue;
        const [r, c] = cell(t);
        const jumped = board[r][c] !== -1;
        if (jumped) t = board[r][c];
        if (dist[t] === -1) {
          dist[t] = dist[s] + 1;
          next.push(t);
          if (t === n * n) {
            push(14, `Reached final square ${t} in ${dist[t]} move(s).`, { frontier: [...frontier], reached: t, jumped, moves: dist[t], answer: dist[t] });
            return steps;
          }
        }
      }
    }
    moves++;
    frontier = next;
    if (next.length) push(17, `After ${moves} move(s): reachable squares [${next.slice(0, 12).join(", ")}${next.length > 12 ? "…" : ""}].`, { frontier: [...next], moves });
  }

  push(19, "Final square unreachable → -1.", { answer: -1 });
  return steps;
}
