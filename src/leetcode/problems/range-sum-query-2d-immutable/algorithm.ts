import type { Step } from "@/core/types";

export interface RangeSum2DData {
  matrix: number[][];
  /** padded prefix-sum grid (R+1)x(C+1) */
  P: number[][];
  phase: "build" | "query";
  /** cell in P just filled during build */
  fill: [number, number] | null;
  /** current query [r1,c1,r2,c2] */
  query: [number, number, number, number] | null;
  /** the four P corners used: {br, tr, bl, tl} as [row,col] into P */
  corners: { br: number[]; tr: number[]; bl: number[]; tl: number[] } | null;
  result: number | null;
  answer: number | null;
}

export type RangeSum2DStep = Step<RangeSum2DData>;

/**
 * A padded prefix-sum grid P[i][j] holds the sum of every matrix cell above-and-left of (i,j). Any
 * rectangle's sum is then four lookups by inclusion–exclusion: bottom-right minus the two strips above
 * and left, plus the doubly-removed top-left corner. `line` indexes CODE.
 */
export function rangeSum2DSteps(matrix: number[][], queries: [number, number, number, number][]): RangeSum2DStep[] {
  const steps: RangeSum2DStep[] = [];
  const R = matrix.length;
  const C = matrix[0].length;
  const P = Array.from({ length: R + 1 }, () => new Array(C + 1).fill(0));

  const snap = (o: Partial<RangeSum2DData>): RangeSum2DData => ({ matrix, P: P.map((r) => [...r]), phase: "build", fill: null, query: null, corners: null, result: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RangeSum2DData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, "Build a padded prefix-sum grid: P[i+1][j+1] = sum of the top-left rectangle.");
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      P[r + 1][c + 1] = matrix[r][c] + P[r][c + 1] + P[r + 1][c] - P[r][c];
    }
  }
  push(8, "Prefix grid complete.", { fill: [R, C] });

  let last = 0;
  for (const [r1, c1, r2, c2] of queries) {
    const br = [r2 + 1, c2 + 1];
    const tr = [r1, c2 + 1];
    const bl = [r2 + 1, c1];
    const tl = [r1, c1];
    const result = P[br[0]][br[1]] - P[tr[0]][tr[1]] - P[bl[0]][bl[1]] + P[tl[0]][tl[1]];
    last = result;
    push(
      10,
      `sumRegion(${r1},${c1},${r2},${c2}) = ${P[br[0]][br[1]]} − ${P[tr[0]][tr[1]]} − ${P[bl[0]][bl[1]]} + ${P[tl[0]][tl[1]]} = ${result}.`,
      { phase: "query", query: [r1, c1, r2, c2], corners: { br, tr, bl, tl }, result },
    );
  }

  push(12, `Last query result: ${last}.`, { phase: "query", answer: last });
  return steps;
}
