import type { Step } from "@/core/types";

export interface SudokuData {
  board: string[][];
  current: [number, number] | null;
  conflict: [number, number][] | null;
  checked: [number, number][];
  result: boolean | null;
}

export type SudokuStep = Step<SudokuData>;

/**
 * Scan every filled cell once, recording each digit's presence in its row,
 * column and 3×3 box in a hash set. A digit that's already recorded for any of
 * those three is a rule violation. `line` indexes CODE.
 */
export function sudokuSteps(board: string[][]): SudokuStep[] {
  const steps: SudokuStep[] = [];
  const seen = new Map<string, [number, number]>();
  const checked: [number, number][] = [];

  const snap = (current: [number, number] | null, conflict: [number, number][] | null, result: boolean | null): SudokuData => ({
    board: board.map((row) => [...row]),
    current,
    conflict,
    checked: checked.map((c) => [...c] as [number, number]),
    result,
  });
  const push = (line: number, explanation: string, data: SudokuData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Check each filled cell against its row, column and 3×3 box.", snap(null, null, null));

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const v = board[r][c];
      if (v === ".") continue;
      const box = `${(r / 3) | 0},${(c / 3) | 0}`;
      const keys: [string, string][] = [
        [`r${r}:${v}`, "row"],
        [`c${c}:${v}`, "column"],
        [`b${box}:${v}`, "box"],
      ];
      for (const [k, kind] of keys) {
        if (seen.has(k)) {
          const prev = seen.get(k)!;
          push(9, `${v} at (${r},${c}) conflicts with (${prev[0]},${prev[1]}) in the same ${kind} — invalid.`, snap([r, c], [[r, c], prev], false));
          return steps;
        }
        seen.set(k, [r, c]);
      }
      checked.push([r, c]);
      push(10, `${v} at (${r},${c}) is unique in its row, column and box so far.`, snap([r, c], null, null));
    }
  }

  push(12, "Every filled cell obeys the rules — the board is valid.", snap(null, null, true));
  return steps;
}
