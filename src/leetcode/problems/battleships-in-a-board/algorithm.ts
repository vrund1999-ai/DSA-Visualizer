import type { Step } from "@/core/types";

export interface BattleData {
  board: string[][];
  cur: [number, number] | null;
  /** cells counted as ship starts, "r,c" */
  counted: string[];
  count: number;
  answer: number | null;
}

export type BattleStep = Step<BattleData>;

/**
 * Each battleship is counted exactly once at its top-left cell: an 'X' with no 'X' directly above or to
 * its left. A single scan needs no marking or extra space. `line` indexes CODE.
 */
export function battleSteps(board: string[][]): BattleStep[] {
  const steps: BattleStep[] = [];
  const R = board.length;
  const C = board[0].length;
  const counted: string[] = [];
  let count = 0;

  const snap = (o: Partial<BattleData>): BattleData => ({ board, cur: null, counted: [...counted], count, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BattleData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Count each ship at its top-left cell (an 'X' with no 'X' above or left).");

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (board[r][c] !== "X") continue;
      if (r > 0 && board[r - 1][c] === "X") {
        push(5, `(${r},${c}) has an 'X' above — part of an existing ship.`, { cur: [r, c] });
        continue;
      }
      if (c > 0 && board[r][c - 1] === "X") {
        push(6, `(${r},${c}) has an 'X' to the left — part of an existing ship.`, { cur: [r, c] });
        continue;
      }
      count++;
      counted.push(`${r},${c}`);
      push(7, `(${r},${c}) starts a new ship → count ${count}.`, { cur: [r, c] });
    }
  }

  push(9, `Total battleships: ${count}.`, { answer: count });
  return steps;
}
