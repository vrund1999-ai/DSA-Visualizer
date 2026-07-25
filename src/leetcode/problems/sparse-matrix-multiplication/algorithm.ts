import type { Step } from "@/core/types";

export interface SparseMulData {
  A: number[][];
  B: number[][];
  C: number[][];
  /** current A cell [i, p] */
  aCell: [number, number] | null;
  /** current C cell [i, j] being accumulated */
  cCell: [number, number] | null;
  skipped: boolean;
  done: boolean;
}

export type SparseMulStep = Step<SparseMulData>;

/**
 * Multiply A (m×k) by B (k×n). Iterating i, p, j and skipping zero A[i][p] avoids
 * useless work on sparse inputs — each nonzero A entry scatters into a whole row of C.
 * `line` indexes CODE.
 */
export function sparseMulSteps(A: number[][], B: number[][]): SparseMulStep[] {
  const steps: SparseMulStep[] = [];
  const m = A.length;
  const k = A[0].length;
  const n = B[0].length;
  const C = Array.from({ length: m }, () => new Array(n).fill(0));

  const snap = (o: Partial<SparseMulData>): SparseMulData => ({ A: A.map((r) => [...r]), B: B.map((r) => [...r]), C: C.map((r) => [...r]), aCell: null, cCell: null, skipped: false, done: false, ...o });
  const push = (line: number, explanation: string, data: SparseMulData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "C = A × B, skipping zero entries of A.", snap({}));

  for (let i = 0; i < m; i++) {
    for (let p = 0; p < k; p++) {
      if (A[i][p] === 0) {
        push(5, `A[${i}][${p}] = 0 — skip its contributions.`, snap({ aCell: [i, p], skipped: true }));
        continue;
      }
      for (let j = 0; j < n; j++) {
        C[i][j] += A[i][p] * B[p][j];
      }
      push(7, `A[${i}][${p}]=${A[i][p]} scatters into row ${i} of C.`, snap({ aCell: [i, p], cCell: [i, 0] }));
    }
  }

  push(11, "Product complete.", snap({ done: true }));
  return steps;
}
