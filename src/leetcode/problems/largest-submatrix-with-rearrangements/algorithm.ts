import type { Step } from "@/core/types";

export interface LargestSubmatrixData {
  heights: number[][];
  activeRow: number | null;
  sortedRow: number[] | null;
  /** width (j+1) that achieves the best area on the active row */
  bestWidth: number | null;
  bestHeight: number | null;
  best: number;
  answer: number | null;
}

export type LargestSubmatrixStep = Step<LargestSubmatrixData>;

/**
 * Columns may be reordered freely, so for each row we sort its column-heights (consecutive 1s upward)
 * descending; a width of (j+1) columns all at least h[j] tall gives area h[j]·(j+1). The max over all rows
 * and widths is the answer. `line` indexes CODE.
 */
export function largestSubmatrixSteps(matrix: number[][]): LargestSubmatrixStep[] {
  const steps: LargestSubmatrixStep[] = [];
  const m = matrix.length;
  const n = matrix[0].length;
  const heights = matrix.map((row) => [...row]);
  for (let r = 1; r < m; r++) for (let c = 0; c < n; c++) if (heights[r][c]) heights[r][c] += heights[r - 1][c];

  let best = 0;

  const snap = (o: Partial<LargestSubmatrixData>): LargestSubmatrixData => ({
    heights,
    activeRow: null,
    sortedRow: null,
    bestWidth: null,
    bestHeight: null,
    best,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<LargestSubmatrixData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(5, `Built column heights of consecutive 1s.`);

  for (let r = 0; r < m; r++) {
    const sorted = [...heights[r]].sort((a, b) => b - a);
    let rowBest = 0;
    let bw = 0;
    let bh = 0;
    for (let j = 0; j < n; j++) {
      const area = sorted[j] * (j + 1);
      if (area > rowBest) {
        rowBest = area;
        bw = j + 1;
        bh = sorted[j];
      }
    }
    best = Math.max(best, rowBest);
    push(10, `Row ${r}: sorted heights [${sorted.join(", ")}] → best rectangle ${bh}×${bw} = ${rowBest}. Overall best ${best}.`, {
      activeRow: r,
      sortedRow: sorted,
      bestWidth: bw,
      bestHeight: bh,
    });
  }

  push(12, `Largest all-ones submatrix (after rearranging) = ${best}.`, { answer: best });
  return steps;
}
