import type { Step } from "@/core/types";

export interface MatrixSumData {
  matrix: number[][];
  cur: [number, number] | null;
  sumAbs: number;
  negs: number;
  minAbs: number;
  /** cell holding the current minimum absolute value */
  minCell: [number, number] | null;
  answer: number | null;
}

export type MatrixSumStep = Step<MatrixSumData>;

/**
 * Flipping the sign of two adjacent cells lets negatives be moved around and cancelled in pairs. So an even
 * count of negatives can all become positive (sum of absolutes); an odd count leaves exactly one negative,
 * best placed on the smallest magnitude — costing 2·minAbs. `line` indexes CODE.
 */
export function matrixSumSteps(matrix: number[][]): MatrixSumStep[] {
  const steps: MatrixSumStep[] = [];
  let sumAbs = 0;
  let negs = 0;
  let minAbs = Infinity;
  let minCell: [number, number] | null = null;

  const snap = (o: Partial<MatrixSumData>): MatrixSumData => ({ matrix, cur: null, sumAbs, negs, minAbs, minCell, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MatrixSumData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Sum absolute values, count negatives, and track the smallest magnitude.");

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      const v = matrix[r][c];
      sumAbs += Math.abs(v);
      if (v < 0) negs++;
      if (Math.abs(v) < minAbs) {
        minAbs = Math.abs(v);
        minCell = [r, c];
      }
      push(7, `(${r},${c})=${v}: |v|=${Math.abs(v)}, negatives so far ${negs}.`, { cur: [r, c] });
    }
  }

  const answer = negs % 2 === 0 ? sumAbs : sumAbs - 2 * minAbs;
  push(negs % 2 === 0 ? 11 : 12, negs % 2 === 0 ? `Even negatives → all positive, sum ${sumAbs}.` : `Odd negatives → one stuck on min |${minAbs}|: ${sumAbs} − ${2 * minAbs} = ${answer}.`, { answer });
  return steps;
}
