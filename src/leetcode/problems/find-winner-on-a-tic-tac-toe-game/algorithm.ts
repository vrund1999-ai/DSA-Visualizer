import type { Step } from "@/core/types";

export interface TicTacToeData {
  grid: number[][];
  /** cell just played */
  cur: [number, number] | null;
  player: "A" | "B" | null;
  /** the three winning cells, once someone wins */
  winLine: string[];
  answer: string | null;
}

export type TicTacToeStep = Step<TicTacToeData>;

const LINES: [number, number][][] = [
  [[0, 0], [0, 1], [0, 2]], [[1, 0], [1, 1], [1, 2]], [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]],
  [[0, 0], [1, 1], [2, 2]], [[0, 2], [1, 1], [2, 0]],
];

const winningLine = (g: number[][], mark: number) =>
  LINES.find((line) => line.every(([r, c]) => g[r][c] === mark));

/**
 * Replay the moves, marking A (first player) and B alternately. After each placement we only need
 * to check the eight lines for a completed triple of the just-moved mark. If nobody wins, a full
 * board is a draw, otherwise the game is still pending. `line` indexes CODE.
 */
export function tictactoeSteps(moves: number[][]): TicTacToeStep[] {
  const steps: TicTacToeStep[] = [];
  const grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  const snap = (o: Partial<TicTacToeData>): TicTacToeData => ({ grid: grid.map((r) => [...r]), cur: null, player: null, winLine: [], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<TicTacToeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Replay the moves, alternating A then B, checking for a line after each.");

  for (let t = 0; t < moves.length; t++) {
    const [r, c] = moves[t];
    const mark = t % 2 === 0 ? 1 : 2;
    const player = t % 2 === 0 ? "A" : "B";
    grid[r][c] = mark;
    const win = winningLine(grid, mark);
    if (win) {
      push(6, `${player} completes a line at (${r}, ${c}) → ${player} wins.`, { cur: [r, c], player, winLine: win.map(([wr, wc]) => `${wr},${wc}`), answer: player });
      return steps;
    }
    push(4, `Move ${t + 1}: ${player} plays (${r}, ${c}); no line yet.`, { cur: [r, c], player });
  }

  const answer = moves.length === 9 ? "Draw" : "Pending";
  push(8, `No winner; board ${moves.length === 9 ? "full" : "unfinished"} → ${answer}.`, { answer });
  return steps;
}
