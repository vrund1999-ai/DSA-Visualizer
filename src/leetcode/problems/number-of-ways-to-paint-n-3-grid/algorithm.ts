import type { Step } from "@/core/types";

export interface PaintGridData {
  n: number;
  /** row index just computed */
  row: number | null;
  /** number of valid ways whose row pattern uses 2 colors (aba) */
  aba: number;
  /** ...and 3 colors (abc) */
  abc: number;
  answer: number | null;
}

export type PaintGridStep = Step<PaintGridData>;

const MOD = 1_000_000_007;

/**
 * Number of Ways to Paint an n×3 Grid: classify each row by whether it uses 2 colors (an "aba" pattern) or
 * 3 ("abc"). An aba row can be followed by 3 aba rows and 2 abc rows; an abc row by 2 of each. Track the two
 * counts up the grid; the answer is their sum. `line` indexes CODE.
 */
export function paintGridSteps(n: number): PaintGridStep[] {
  const steps: PaintGridStep[] = [];
  let aba = 6;
  let abc = 6;

  const snap = (o: Partial<PaintGridData>): PaintGridData => ({ n, row: null, aba, abc, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PaintGridData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Row 1: 6 two-color (aba) + 6 three-color (abc) = 12 patterns.`, { row: 1 });

  for (let i = 2; i <= n; i++) {
    const nAba = (aba * 3 + abc * 2) % MOD;
    const nAbc = (aba * 2 + abc * 2) % MOD;
    aba = nAba;
    abc = nAbc;
    push(9, `Row ${i}: aba = ${aba}, abc = ${abc}.`, { row: i });
  }

  const answer = (aba + abc) % MOD;
  push(11, `Total ways = ${answer}.`, { answer });
  return steps;
}
