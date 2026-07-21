import type { Highlight, Step } from "@/core/types";

export interface SetZeroesData {
  matrix: number[][];
  phase: "scan" | "apply" | "done";
  zeroRows: number[];
  zeroCols: number[];
}

export type SetZeroesStep = Step<SetZeroesData>;

/**
 * Two passes: first record which rows and columns contain a zero, then blank
 * out every cell in those rows/columns. Recording first avoids a fresh zero
 * from pass two cascading incorrectly. `line` indexes CODE.
 */
export function setZeroesSteps(input: number[][]): SetZeroesStep[] {
  const matrix = input.map((row) => [...row]);
  const rows = new Set<number>();
  const cols = new Set<number>();
  const steps: SetZeroesStep[] = [];
  const R = matrix.length;
  const C = R ? matrix[0].length : 0;

  const snap = (phase: SetZeroesData["phase"], line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { matrix: matrix.map((r) => [...r]), phase, zeroRows: [...rows], zeroCols: [...cols] },
      highlights,
    });
  };

  snap("scan", 1, "Pass 1: record every row and column that contains a zero.", []);
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (matrix[r][c] === 0) {
        rows.add(r);
        cols.add(c);
        snap("scan", 4, `Zero at (${r}, ${c}) — mark row ${r} and column ${c}.`, [{ ref: `${r},${c}`, role: "pivot" }]);
      }
    }
  }

  snap("apply", 6, "Pass 2: blank out all marked rows and columns.", []);
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if ((rows.has(r) || cols.has(c)) && matrix[r][c] !== 0) {
        matrix[r][c] = 0;
        snap("apply", 8, `(${r}, ${c}) is in a marked row/column — set it to 0.`, [{ ref: `${r},${c}`, role: "swapped" }]);
      }
    }
  }

  snap("done", 10, "All marked rows and columns are zeroed.", []);
  return steps;
}
