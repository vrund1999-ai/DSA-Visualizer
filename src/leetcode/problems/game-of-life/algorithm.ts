import type { Step } from "@/core/types";

export interface LifeData {
  board: number[][];
  next: (number | null)[][];
  cur: [number, number] | null;
  live: number | null;
  outcome: "survive" | "die" | "birth" | "stay-dead" | null;
  answer: number[][] | null;
}

export type LifeStep = Step<LifeData>;

/**
 * Conway's rules depend only on each cell's eight neighbors in the *current* generation: a live cell
 * survives with 2 or 3 live neighbors, and a dead cell is born with exactly 3. We compute every cell's
 * next state into a fresh grid so updates don't interfere. `line` indexes CODE.
 */
export function lifeSteps(input: number[][]): LifeStep[] {
  const steps: LifeStep[] = [];
  const board = input.map((r) => [...r]);
  const m = board.length;
  const n = board[0].length;
  const next: (number | null)[][] = Array.from({ length: m }, () => new Array(n).fill(null));

  const snap = (o: Partial<LifeData>): LifeData => ({ board, next: next.map((r) => [...r]), cur: null, live: null, outcome: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<LifeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const liveN = (r: number, c: number) => {
    let count = 0;
    for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nc >= 0 && nr < m && nc < n && board[nr][nc] === 1) count++;
    }
    return count;
  };

  push(2, "Each cell's next state depends on its live neighbors in the current board.");

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const live = liveN(r, c);
      let outcome: LifeData["outcome"];
      if (board[r][c] === 1) { next[r][c] = live === 2 || live === 3 ? 1 : 0; outcome = next[r][c] ? "survive" : "die"; }
      else { next[r][c] = live === 3 ? 1 : 0; outcome = next[r][c] ? "birth" : "stay-dead"; }
      push(next[r][c] && board[r][c] === 0 ? 9 : 7, `(${r}, ${c}) ${board[r][c] ? "live" : "dead"} with ${live} live neighbors → ${outcome}.`, { cur: [r, c], live, outcome });
    }
  }

  push(11, "Next generation computed.", { answer: next.map((r) => r.map((v) => v!)) });
  return steps;
}
