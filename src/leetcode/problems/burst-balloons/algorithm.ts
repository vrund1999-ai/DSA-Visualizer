import type { Step } from "@/core/types";

export interface BurstData {
  /** padded balloon values [1, ...nums, 1] */
  a: number[];
  dp: number[][];
  /** interval (i, j) exclusive being solved */
  i: number | null;
  j: number | null;
  /** the chosen last balloon to burst */
  k: number | null;
  answer: number | null;
}

export type BurstStep = Step<BurstData>;

/**
 * The trick is to decide which balloon in an interval is burst *last*: then its neighbors are the
 * padded ends of that interval, giving coins a[i]·a[k]·a[j] plus the two independent sub-intervals.
 * Interval DP over the padded array evaluates every such choice. `line` indexes CODE.
 */
export function burstSteps(nums: number[]): BurstStep[] {
  const steps: BurstStep[] = [];
  const a = [1, ...nums, 1];
  const n = a.length;
  const dp: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));

  const snap = (o: Partial<BurstData>): BurstData => ({ a, dp: dp.map((r) => [...r]), i: null, j: null, k: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BurstData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Pad with 1s: [${a.join(", ")}]. dp[i][j] = best coins from balloons strictly inside.`);

  for (let len = 2; len < n; len++) {
    for (let i = 0; i + len < n; i++) {
      const j = i + len;
      let bestK = -1;
      for (let k = i + 1; k < j; k++) {
        const coins = a[i] * a[k] * a[j] + dp[i][k] + dp[k][j];
        if (coins > dp[i][j]) { dp[i][j] = coins; bestK = k; }
      }
      push(10, `Interval (${i}, ${j}): burst ${a[bestK]} last → ${dp[i][j]} coins.`, { i, j, k: bestK });
    }
  }

  push(14, `Maximum coins: ${dp[0][n - 1]}.`, { answer: dp[0][n - 1] });
  return steps;
}
