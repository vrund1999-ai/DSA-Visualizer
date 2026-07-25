import type { Step } from "@/core/types";

export interface MaximalRectData {
  matrix: string[][];
  /** row index whose histogram is current */
  row: number;
  heights: number[];
  best: number;
  /** area found this row, and its column span [lo, hi] */
  rowArea: number | null;
  bestSpan: { row: number; lo: number; hi: number; height: number } | null;
  answer: number | null;
}

export type MaximalRectStep = Step<MaximalRectData>;

function largestRect(h: number[]): { area: number; lo: number; hi: number; height: number } {
  const stack: number[] = [];
  let best = 0;
  let span = { lo: 0, hi: -1, height: 0 };
  for (let i = 0; i <= h.length; i++) {
    const cur = i < h.length ? h[i] : 0;
    while (stack.length && h[stack[stack.length - 1]] >= cur) {
      const height = h[stack.pop()!];
      const left = stack.length ? stack[stack.length - 1] : -1;
      const width = i - left - 1;
      if (height * width > best) {
        best = height * width;
        span = { lo: left + 1, hi: i - 1, height };
      }
    }
    stack.push(i);
  }
  return { area: best, ...span };
}

/**
 * Reduce to "largest rectangle in a histogram" row by row: each column's height is
 * the run of consecutive 1s ending at the current row. The best over all rows is the
 * answer. `line` indexes CODE.
 */
export function maximalRectSteps(matrix: string[][]): MaximalRectStep[] {
  const steps: MaximalRectStep[] = [];
  const n = matrix[0].length;
  const h = new Array(n).fill(0);
  let best = 0;
  let bestSpan: MaximalRectData["bestSpan"] = null;

  const snap = (row: number, o: Partial<MaximalRectData>): MaximalRectData => ({ matrix: matrix.map((r) => [...r]), row, heights: [...h], best, rowArea: null, bestSpan, answer: null, ...o });
  const push = (line: number, row: number, explanation: string, o: Partial<MaximalRectData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(row, o), highlights: [] });
  };

  push(3, -1, "For each row, treat consecutive 1s as histogram bars.");

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < n; c++) h[c] = matrix[r][c] === "1" ? h[c] + 1 : 0;
    const { area, lo, hi, height } = largestRect(h);
    if (area > best) {
      best = area;
      bestSpan = { row: r, lo, hi, height };
    }
    push(7, r, `Row ${r}: heights [${h.join(", ")}] → largest rectangle ${area}.`, { rowArea: area });
  }

  push(9, -1, `Maximal rectangle area: ${best}.`, { answer: best });
  return steps;
}
