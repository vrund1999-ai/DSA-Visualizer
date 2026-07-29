import type { Step } from "@/core/types";

export interface CutStickData {
  n: number;
  /** cut positions with 0 and n added, sorted */
  positions: number[];
  dp: number[][];
  /** interval [i, j] being solved */
  i: number | null;
  j: number | null;
  /** chosen first cut k */
  k: number | null;
  answer: number | null;
}

export type CutStickStep = Step<CutStickData>;

const INF = Infinity;

/**
 * The cost of cutting a segment is its length regardless of order, so this is interval DP over the
 * sorted cut positions (with the stick's ends added). dp[i][j] is the cheapest way to make all cuts
 * strictly between positions i and j: pick the first cut k, pay this segment's length, and add the
 * two sub-intervals. `line` indexes CODE.
 */
export function cutStickSteps(n: number, cuts: number[]): CutStickStep[] {
  const steps: CutStickStep[] = [];
  const positions = [0, ...[...cuts].sort((a, b) => a - b), n];
  const m = positions.length;
  const dp: number[][] = Array.from({ length: m }, () => new Array(m).fill(0));

  const snap = (o: Partial<CutStickData>): CutStickData => ({ n, positions, dp: dp.map((r) => [...r]), i: null, j: null, k: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CutStickData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Cut positions (with ends): [${positions.join(", ")}]. Solve intervals shortest first.`);

  for (let len = 2; len < m; len++) {
    for (let i = 0; i + len < m; i++) {
      const j = i + len;
      let best = INF;
      let bestK = -1;
      for (let k = i + 1; k < j; k++) {
        const cand = dp[i][k] + dp[k][j] + positions[j] - positions[i];
        if (cand < best) { best = cand; bestK = k; }
      }
      dp[i][j] = best;
      push(11, `Segment [${positions[i]}, ${positions[j]}]: first cut at ${positions[bestK]} → cost ${best}.`, { i, j, k: bestK });
    }
  }

  push(14, `Minimum total cutting cost: ${dp[0][m - 1]}.`, { answer: dp[0][m - 1] });
  return steps;
}
