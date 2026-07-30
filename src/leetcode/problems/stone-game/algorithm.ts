import type { Step } from "@/core/types";

export interface StoneData {
  piles: number[];
  /** dp[i][j] = best score lead for the player to move on piles[i..j] */
  dp: number[][];
  /** cells already computed */
  filled: boolean[][];
  cur: [number, number] | null;
  answer: boolean | null;
}

export type StoneStep = Step<StoneData>;

/**
 * dp[i][j] is the largest score lead the player to move can force over piles i…j. They take one end and
 * subtract the opponent's best on the rest (the opponent then leads). Filling by increasing interval
 * length, a positive dp[0][n−1] means the first player wins. `line` indexes CODE.
 */
export function stoneSteps(piles: number[]): StoneStep[] {
  const steps: StoneStep[] = [];
  const n = piles.length;
  const dp = Array.from({ length: n }, () => new Array(n).fill(0));
  const filled = Array.from({ length: n }, () => new Array(n).fill(false));

  const snap = (o: Partial<StoneData>): StoneData => ({ piles, dp: dp.map((r) => [...r]), filled: filled.map((r) => [...r]), cur: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<StoneData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  for (let i = 0; i < n; i++) {
    dp[i][i] = piles[i];
    filled[i][i] = true;
  }
  push(3, "Base case: a single pile — the mover simply takes it.");

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;
      dp[i][j] = Math.max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1]);
      filled[i][j] = true;
      push(9, `piles[${i}..${j}]: max(take ${piles[i]} − ${dp[i + 1][j]}, take ${piles[j]} − ${dp[i][j - 1]}) = ${dp[i][j]}.`, { cur: [i, j] });
    }
  }

  push(11, `dp[0][${n - 1}] = ${dp[0][n - 1]} > 0 → first player ${dp[0][n - 1] > 0 ? "wins" : "loses"}.`, { answer: dp[0][n - 1] > 0 });
  return steps;
}
