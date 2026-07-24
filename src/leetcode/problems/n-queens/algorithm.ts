import type { Step } from "@/core/types";

export interface NQueensData {
  n: number;
  /** Column of the queen in each placed row; length = rows filled so far. */
  queens: number[];
  tryCell: [number, number] | null;
  conflict: boolean;
  solutions: number;
}

export type NQueensStep = Step<NQueensData>;

/**
 * Place one queen per row, tracking used columns and both diagonals (r−c and
 * r+c) in sets so conflicts are O(1). Backtracking removes a queen to try the
 * next column. `line` indexes CODE.
 */
export function nQueensSteps(n: number): NQueensStep[] {
  const steps: NQueensStep[] = [];
  const cols = new Set<number>();
  const diag = new Set<number>();
  const anti = new Set<number>();
  const pos: number[] = [];
  let solutions = 0;

  const snap = (tryCell: [number, number] | null, conflict: boolean): NQueensData => ({
    n,
    queens: [...pos],
    tryCell,
    conflict,
    solutions,
  });
  const push = (line: number, explanation: string, data: NQueensData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [], metrics: { solutions } });
  };

  const bt = (r: number) => {
    if (r === n) {
      solutions++;
      push(4, `All ${n} queens placed — solution #${solutions}.`, snap(null, false));
      return;
    }
    for (let c = 0; c < n; c++) {
      if (cols.has(c) || diag.has(r - c) || anti.has(r + c)) {
        push(7, `(${r}, ${c}) is attacked — skip.`, snap([r, c], true));
        continue;
      }
      cols.add(c);
      diag.add(r - c);
      anti.add(r + c);
      pos.push(c);
      push(8, `Place a queen at (${r}, ${c}).`, snap([r, c], false));
      bt(r + 1);
      cols.delete(c);
      diag.delete(r - c);
      anti.delete(r + c);
      pos.pop();
    }
  };

  push(0, `Place ${n} non-attacking queens, one per row.`, snap(null, false));
  bt(0);
  push(14, `Found ${solutions} distinct solution(s).`, snap(null, false));
  return steps;
}
