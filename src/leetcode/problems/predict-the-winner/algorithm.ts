import type { Step } from "@/core/types";

export interface PredictWinnerData {
  nums: number[];
  dp: number[][];
  /** interval [i, j] just filled */
  cell: [number, number] | null;
  answer: boolean | null;
}

export type PredictWinnerStep = Step<PredictWinnerData>;

/**
 * Predict the Winner: dp[i][j] is the best achievable score difference (current player minus opponent) on
 * nums[i..j]. Taking an end nets that value minus whatever the opponent then optimally gets on the rest, so
 * dp[i][j] = max(nums[i] − dp[i+1][j], nums[j] − dp[i][j−1]). Player 1 wins iff dp[0][n−1] ≥ 0. `line`
 * indexes CODE.
 */
export function predictWinnerSteps(nums: number[]): PredictWinnerStep[] {
  const steps: PredictWinnerStep[] = [];
  const n = nums.length;
  const dp = nums.map(() => new Array(n).fill(0));

  const snap = (o: Partial<PredictWinnerData>): PredictWinnerData => ({
    nums,
    dp: dp.map((r) => [...r]),
    cell: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<PredictWinnerData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  for (let i = 0; i < n; i++) dp[i][i] = nums[i];
  push(4, `Base case: a single element gives the current player exactly that score.`);

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;
      dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
      push(8, `[${i}, ${j}]: max(take ${nums[i]} → ${nums[i] - dp[i + 1][j]}, take ${nums[j]} → ${nums[j] - dp[i][j - 1]}) = ${dp[i][j]}.`, { cell: [i, j] });
    }
  }

  const answer = dp[0][n - 1] >= 0;
  push(12, `dp[0][${n - 1}] = ${dp[0][n - 1]} ${answer ? "≥" : "<"} 0 → player 1 ${answer ? "wins (or ties)" : "loses"}.`, { answer });
  return steps;
}
