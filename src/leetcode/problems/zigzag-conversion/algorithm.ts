import type { Step } from "@/core/types";

export interface ZigzagInput {
  s: string;
  numRows: number;
}

export interface ZigzagData {
  s: string;
  numRows: number;
  rows: string[];
  currentChar: number | null;
  currentRow: number;
  result: string | null;
}

export type ZigzagStep = Step<ZigzagData>;

/**
 * Walk the string once, dropping each character into a row buffer while a
 * direction that flips at the top and bottom rows makes the row index bounce up
 * and down — the zigzag. Reading the rows top to bottom gives the answer. `line`
 * indexes CODE.
 */
export function zigzagSteps(input: ZigzagInput): ZigzagStep[] {
  const { s, numRows } = input;
  const steps: ZigzagStep[] = [];
  const rows = Array.from({ length: Math.max(numRows, 1) }, () => "");

  const snap = (line: number, explanation: string, currentChar: number | null, currentRow: number, result: string | null) => {
    steps.push({ id: steps.length, line, explanation, data: { s, numRows, rows: [...rows], currentChar, currentRow, result }, highlights: [] });
  };

  if (numRows === 1) {
    rows[0] = s;
    snap(1, "Single row — the string is unchanged.", null, 0, s);
    return steps;
  }

  let r = 0;
  let dir = -1;
  snap(3, `Bounce a row pointer between rows 0 and ${numRows - 1}.`, null, 0, null);

  for (let i = 0; i < s.length; i++) {
    rows[r] += s[i];
    snap(5, `Place '${s[i]}' in row ${r}.`, i, r, null);
    if (r === 0 || r === numRows - 1) dir = -dir;
    r += dir;
  }

  const result = rows.join("");
  snap(9, `Read rows top to bottom → "${result}".`, null, r, result);
  return steps;
}
