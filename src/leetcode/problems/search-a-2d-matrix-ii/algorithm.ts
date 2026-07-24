import type { Step } from "@/core/types";

export interface SearchMatrixData {
  matrix: number[][];
  target: number;
  r: number;
  c: number;
  /** cells already visited on the staircase path */
  path: [number, number][];
  found: boolean | null;
}

export type SearchMatrixStep = Step<SearchMatrixData>;

/**
 * Start at the top-right corner. That cell is the largest in its row and smallest in
 * its column, so comparing it to the target eliminates a whole row or column each
 * step — a monotone staircase toward the answer. `line` indexes CODE.
 */
export function searchMatrixSteps(matrix: number[][], target: number): SearchMatrixStep[] {
  const steps: SearchMatrixStep[] = [];
  const path: [number, number][] = [];
  let r = 0;
  let c = matrix[0].length - 1;

  const snap = (o: Partial<SearchMatrixData>): SearchMatrixData => ({ matrix: matrix.map((row) => [...row]), target, r, c, path: [...path], found: null, ...o });
  const push = (line: number, explanation: string, data: SearchMatrixData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Start at the top-right corner; hunt for ${target}.`, snap({}));

  while (r < matrix.length && c >= 0) {
    const v = matrix[r][c];
    path.push([r, c]);
    if (v === target) {
      push(4, `matrix[${r}][${c}] = ${target} — found!`, snap({ found: true }));
      return steps;
    } else if (v > target) {
      push(5, `${v} > ${target} — this column is too big, move left.`, snap({}));
      c--;
    } else {
      push(6, `${v} < ${target} — this row is too small, move down.`, snap({}));
      r++;
    }
  }

  push(8, `Walked off the matrix — ${target} is absent.`, snap({ found: false }));
  return steps;
}
