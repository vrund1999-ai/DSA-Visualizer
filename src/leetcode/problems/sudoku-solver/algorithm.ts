import type { Step } from "@/core/types";

export interface SudokuData {
  grid: number[][];
  /** cell currently being acted on */
  cur: [number, number] | null;
  action: "place" | "backtrack" | "done" | null;
  /** cells that were empty in the original puzzle (to color givens vs. filled) */
  givens: string[];
  solved: boolean;
}

export type SudokuStep = Step<SudokuData>;

const box = (n: number) => Math.floor(n / 3) * 3;

function isValid(g: number[][], r: number, c: number, d: number): boolean {
  for (let i = 0; i < 9; i++) if (g[r][i] === d || g[i][c] === d) return false;
  const br = box(r);
  const bc = box(c);
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) if (g[br + i][bc + j] === d) return false;
  return true;
}

// Cap snapshots so the animation (and the render-every-frame smoke test) stay bounded.
const MAX_STEPS = 600;

/**
 * Classic backtracking: scan for the first empty cell, try digits 1-9 that don't clash with the
 * row, column, or 3×3 box, place one, and recurse; if the recursion dead-ends, undo the digit
 * and try the next. The puzzle here starts nearly complete so the search stays short. `line` indexes CODE.
 */
export function sudokuSteps(input: number[][]): SudokuStep[] {
  const steps: SudokuStep[] = [];
  const grid = input.map((r) => [...r]);
  const givens: string[] = [];
  for (let r = 0; r < 9; r++) for (let c = 0; c < 9; c++) if (grid[r][c] !== 0) givens.push(`${r},${c}`);

  const push = (line: number, explanation: string, cur: [number, number] | null, action: SudokuData["action"], solved = false) => {
    if (steps.length >= MAX_STEPS && action !== "done") return;
    steps.push({ id: steps.length, line, explanation, data: { grid: grid.map((r) => [...r]), cur, action, givens, solved }, highlights: [] });
  };

  push(1, "Backtracking: fill the first empty cell with any digit that fits, then recurse.", null, null);

  const solve = (): boolean => {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (grid[r][c] !== 0) continue;
        for (let d = 1; d <= 9; d++) {
          if (isValid(grid, r, c, d)) {
            grid[r][c] = d;
            push(7, `Place ${d} at (${r}, ${c}); it fits the row, column, and box.`, [r, c], "place");
            if (solve()) return true;
            grid[r][c] = 0;
            push(9, `Dead end — remove ${d} from (${r}, ${c}) and try the next digit.`, [r, c], "backtrack");
          }
        }
        return false;
      }
    }
    return true;
  };

  solve();
  push(14, "Board complete — every cell satisfies Sudoku's constraints.", null, "done", true);
  return steps;
}
