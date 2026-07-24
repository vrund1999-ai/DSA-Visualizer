import type { Step } from "@/core/types";

export interface SurroundedData {
  board: string[][];
  cur: [number, number] | null;
  phase: "mark" | "flip" | "done";
}

export type SurroundedStep = Step<SurroundedData>;

/**
 * Any 'O' region connected to the border survives; everything else is surrounded.
 * DFS from every border 'O' marks the safe cells, then a final sweep flips unmarked
 * 'O's to 'X' and restores marked ones. `line` indexes CODE.
 */
export function surroundedSteps(input: string[][]): SurroundedStep[] {
  const steps: SurroundedStep[] = [];
  const board = input.map((row) => [...row]);
  const m = board.length;
  const n = board[0].length;

  const snap = (o: Partial<SurroundedData>): SurroundedData => ({ board: board.map((r) => [...r]), cur: null, phase: "mark", ...o });
  const push = (line: number, explanation: string, data: SurroundedData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(4, "Flood-fill safe 'O's reachable from the border.", snap({}));

  const dfs = (r: number, c: number) => {
    if (r < 0 || c < 0 || r >= m || c >= n || board[r][c] !== "O") return;
    board[r][c] = "S";
    push(4, `Mark (${r}, ${c}) safe — it connects to the border.`, snap({ cur: [r, c], phase: "mark" }));
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };

  for (let r = 0; r < m; r++) {
    dfs(r, 0);
    dfs(r, n - 1);
  }
  for (let c = 0; c < n; c++) {
    dfs(0, c);
    dfs(m - 1, c);
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === "O") {
        board[r][c] = "X";
        push(11, `(${r}, ${c}) was surrounded — capture to 'X'.`, snap({ cur: [r, c], phase: "flip" }));
      } else if (board[r][c] === "S") {
        board[r][c] = "O";
      }
    }
  }

  push(11, "Done — border-connected regions kept, the rest captured.", snap({ phase: "done" }));
  return steps;
}
