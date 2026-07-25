import type { Step } from "@/core/types";

export interface SubmatData {
  mat: number[][];
  /** consecutive-ones height per column up to the current row */
  height: number[];
  row: number | null;
  /** right column of the rectangles being counted */
  j: number | null;
  /** columns [k..j] contributing this step */
  span: number[];
  added: number | null;
  total: number;
  answer: number | null;
}

export type SubmatStep = Step<SubmatData>;

/**
 * Treat each row as the base of a histogram whose bars are the consecutive 1s above each column. For
 * a fixed right column j, extending left keeps a running minimum height; each column added contributes
 * that minimum many all-one rectangles whose bottom-right corner is (i, j). `line` indexes CODE.
 */
export function submatSteps(mat: number[][]): SubmatStep[] {
  const steps: SubmatStep[] = [];
  const m = mat.length;
  const n = mat[0].length;
  const height = new Array(n).fill(0);
  let total = 0;

  const snap = (o: Partial<SubmatData>): SubmatData => ({ mat, height: [...height], row: null, j: null, span: [], added: null, total, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SubmatData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Row by row, count all-one rectangles using per-column histogram heights.");

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) height[j] = mat[i][j] ? height[j] + 1 : 0;
    push(6, `Row ${i}: heights = [${height.join(", ")}].`, { row: i });

    for (let j = 0; j < n; j++) {
      let minH = Infinity;
      let added = 0;
      const span: number[] = [];
      for (let k = j; k >= 0 && height[k] > 0; k--) {
        minH = Math.min(minH, height[k]);
        added += minH;
        span.push(k);
      }
      total += added;
      if (added > 0) push(11, `Right col ${j}: extend left → +${added} rectangles (total ${total}).`, { row: i, j, span, added });
    }
  }

  push(15, `Total all-one submatrices: ${total}.`, { answer: total });
  return steps;
}
