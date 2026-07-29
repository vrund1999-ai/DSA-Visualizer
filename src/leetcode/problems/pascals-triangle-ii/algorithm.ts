import type { Step } from "@/core/types";

export interface PascalData {
  rowIndex: number;
  /** all rows built so far, for the triangle view */
  rows: number[][];
  /** row index being built */
  building: number | null;
  answer: number[] | null;
}

export type PascalStep = Step<PascalData>;

/**
 * Each interior entry of Pascal's triangle is the sum of the two entries above it, with 1s on the
 * edges. Building row by row from the previous row yields the requested row. `line` indexes CODE.
 */
export function pascalSteps(rowIndex: number): PascalStep[] {
  const steps: PascalStep[] = [];
  const rows: number[][] = [[1]];

  const snap = (o: Partial<PascalData>): PascalData => ({ rowIndex, rows: rows.map((r) => [...r]), building: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PascalData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Row 0 = [1]; each next row sums adjacent pairs, bordered by 1s.");

  let row = [1];
  for (let r = 1; r <= rowIndex; r++) {
    const next = [1];
    for (let i = 1; i < row.length; i++) next.push(row[i - 1] + row[i]);
    next.push(1);
    row = next;
    rows.push([...row]);
    push(7, `Row ${r} = [${row.join(", ")}].`, { building: r });
  }

  push(9, `Row ${rowIndex}: [${row.join(", ")}].`, { answer: [...row] });
  return steps;
}
