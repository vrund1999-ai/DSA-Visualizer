import type { Step } from "@/core/types";

export interface TransposeData {
  matrix: number[][];
  res: (number | null)[][];
  /** source cell being copied */
  src: [number, number] | null;
  /** destination cell */
  dst: [number, number] | null;
  answer: number[][] | null;
}

export type TransposeStep = Step<TransposeData>;

/**
 * Transposing reflects the matrix across its main diagonal: the value at row i, column j moves to row
 * j, column i. Copying each cell to its swapped-index position builds the n×m result. `line` indexes CODE.
 */
export function transposeSteps(matrix: number[][]): TransposeStep[] {
  const steps: TransposeStep[] = [];
  const m = matrix.length;
  const n = matrix[0].length;
  const res: (number | null)[][] = Array.from({ length: n }, () => new Array(m).fill(null));

  const snap = (o: Partial<TransposeData>): TransposeData => ({ matrix, res: res.map((r) => [...r]), src: null, dst: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<TransposeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Move each matrix[i][j] to res[j][i] — a reflection across the diagonal.");

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[j][i] = matrix[i][j];
      push(5, `matrix[${i}][${j}] = ${matrix[i][j]} → res[${j}][${i}].`, { src: [i, j], dst: [j, i] });
    }
  }

  push(6, "Transpose complete.", { answer: res.map((r) => r.map((v) => v!)) });
  return steps;
}
