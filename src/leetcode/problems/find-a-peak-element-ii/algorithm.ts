import type { Step } from "@/core/types";

export interface Peak2DData {
  mat: number[][];
  lo: number;
  hi: number;
  mid: number | null;
  /** row holding the column-mid maximum */
  peakRow: number | null;
  answer: [number, number] | null;
}

export type Peak2DStep = Step<Peak2DData>;

/**
 * A 2-D peak exists in whichever column half contains the larger neighbor of the current column's
 * maximum, so binary-searching columns halves the search each round. Within a column we take its
 * global max row; comparing it to the horizontal neighbor tells us which half to keep. `line` indexes CODE.
 */
export function peak2DSteps(mat: number[][]): Peak2DStep[] {
  const steps: Peak2DStep[] = [];
  let lo = 0;
  let hi = mat[0].length - 1;

  const snap = (o: Partial<Peak2DData>): Peak2DData => ({ mat, lo, hi, mid: null, peakRow: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<Peak2DData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Binary-search the columns for a peak.");

  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    let row = 0;
    for (let r = 0; r < mat.length; r++) if (mat[r][mid] > mat[row][mid]) row = r;
    push(6, `Column ${mid}: maximum ${mat[row][mid]} at row ${row}.`, { mid, peakRow: row });

    const left = mid > 0 ? mat[row][mid - 1] : -1;
    const right = mid < hi ? mat[row][mid + 1] : -1;
    if (mat[row][mid] > left && mat[row][mid] > right) {
      push(10, `${mat[row][mid]} beats both neighbors → peak at (${row}, ${mid}).`, { mid, peakRow: row, answer: [row, mid] });
      return steps;
    } else if (right > mat[row][mid]) {
      push(11, `Right neighbor ${right} is larger; a peak must lie to the right.`, { mid, peakRow: row });
      lo = mid + 1;
    } else {
      push(12, `Left side is larger; discard columns ≥ ${mid}.`, { mid, peakRow: row });
      hi = mid - 1;
    }
  }

  push(14, "No peak found.", { answer: [-1, -1] });
  return steps;
}
