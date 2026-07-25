import type { Step } from "@/core/types";

export interface NQueensData {
  n: number;
  /** queen column per placed row; -1 if none */
  queens: number[];
  /** row currently being worked on */
  row: number | null;
  action: "place" | "backtrack" | "solution" | null;
  count: number;
  answer: number | null;
}

export type NQueensStep = Step<NQueensData>;

const MAX_STEPS = 500;

/**
 * Place one queen per row, tracking occupied columns and both diagonals (row−col and row+col) so
 * conflicts are O(1) to test. When a full board is reached we've found a distinct arrangement;
 * otherwise we backtrack and try the next column. `line` indexes CODE.
 */
export function nqueensSteps(n: number): NQueensStep[] {
  const steps: NQueensStep[] = [];
  const queens = new Array(n).fill(-1);
  const cols = new Set<number>();
  const d1 = new Set<number>();
  const d2 = new Set<number>();
  let count = 0;

  const push = (line: number, explanation: string, row: number | null, action: NQueensData["action"], answer: number | null = null) => {
    if (steps.length >= MAX_STEPS && answer === null) return;
    steps.push({ id: steps.length, line, explanation, data: { n, queens: [...queens], row, action, count, answer }, highlights: [] });
  };

  push(1, "Place one queen per row; track columns and both diagonals for conflicts.", null, null);

  const place = (row: number) => {
    if (row === n) {
      count++;
      push(4, `Full board — solution #${count} found.`, row, "solution");
      return;
    }
    for (let c = 0; c < n; c++) {
      if (cols.has(c) || d1.has(row - c) || d2.has(row + c)) continue;
      cols.add(c); d1.add(row - c); d2.add(row + c);
      queens[row] = c;
      push(9, `Place queen at row ${row}, column ${c}.`, row, "place");
      place(row + 1);
      cols.delete(c); d1.delete(row - c); d2.delete(row + c);
      queens[row] = -1;
      push(10, `Backtrack row ${row}, column ${c}.`, row, "backtrack");
    }
  };

  place(0);
  push(14, `Total distinct solutions for n = ${n}: ${count}.`, null, null, count);
  return steps;
}
