import type { Step } from "@/core/types";

export interface PascalData {
  tri: number[][];
  r: number | null;
  c: number | null;
  from: [number, number][];
}

export type PascalStep = Step<PascalData>;

/**
 * Each interior entry is the sum of the two entries above it (edges are 1), the
 * binomial-coefficient recurrence. Build row by row. `line` indexes CODE.
 */
export function pascalSteps(numRows: number): PascalStep[] {
  const steps: PascalStep[] = [];
  const tri: number[][] = [];

  const snap = (line: number, explanation: string, r: number | null, c: number | null, from: [number, number][]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { tri: tri.map((row) => [...row]), r, c, from: from.map((f) => [...f] as [number, number]) },
      highlights: [],
    });
  };

  for (let r = 0; r < numRows; r++) {
    const row = new Array(r + 1).fill(1);
    tri.push(row);
    snap(3, `Row ${r}: start with 1s at both ends.`, r, null, []);
    for (let c = 1; c < r; c++) {
      row[c] = tri[r - 1][c - 1] + tri[r - 1][c];
      snap(5, `row[${c}] = ${tri[r - 1][c - 1]} + ${tri[r - 1][c]} = ${row[c]}.`, r, c, [
        [r - 1, c - 1],
        [r - 1, c],
      ]);
    }
  }

  snap(8, `Built ${numRows} rows of Pascal's triangle.`, null, null, []);
  return steps;
}
