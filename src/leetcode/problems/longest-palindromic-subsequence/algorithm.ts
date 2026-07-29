import type { Step } from "@/core/types";

export interface LPSData {
  s: string;
  dp: number[][];
  /** cell [i][j] being filled */
  cell: [number, number] | null;
  matched: boolean | null;
  answer: number | null;
}

export type LPSStep = Step<LPSData>;

/**
 * dp[i][j] is the longest palindromic subsequence within s[i..j]. Matching ends add 2 to the best of
 * the inner substring; otherwise we drop one end and take the better side. Filling by expanding
 * substrings (i downward, j upward) means every dependency is ready. `line` indexes CODE.
 */
export function lpsSteps(s: string): LPSStep[] {
  const steps: LPSStep[] = [];
  const n = s.length;
  const dp: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));

  const snap = (o: Partial<LPSData>): LPSData => ({ s, dp: dp.map((r) => [...r]), cell: null, matched: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<LPSData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "dp[i][j] = longest palindromic subsequence of s[i..j].");

  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1;
    push(4, `dp[${i}][${i}] = 1 (single character '${s[i]}').`, { cell: [i, i] });
    for (let j = i + 1; j < n; j++) {
      const matched = s[i] === s[j];
      if (matched) dp[i][j] = dp[i + 1][j - 1] + 2;
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      push(matched ? 7 : 9, `dp[${i}][${j}]: '${s[i]}' vs '${s[j]}' ${matched ? "match → inner + 2" : "differ → max of dropping an end"} = ${dp[i][j]}.`, { cell: [i, j], matched });
    }
  }

  push(12, `Longest palindromic subsequence length: ${dp[0][n - 1]}.`, { answer: dp[0][n - 1] });
  return steps;
}
