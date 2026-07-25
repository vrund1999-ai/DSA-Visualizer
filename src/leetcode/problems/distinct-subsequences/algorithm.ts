import type { Step } from "@/core/types";

export interface DistinctSubseqData {
  s: string;
  t: string;
  dp: number[][];
  /** cell [i, j] being filled */
  cur: [number, number] | null;
  /** whether s[i-1] === t[j-1] this step */
  matched: boolean;
  answer: number | null;
}

export type DistinctSubseqStep = Step<DistinctSubseqData>;

/**
 * dp[i][j] = number of distinct subsequences of s[0..i) that equal t[0..j). Every cell inherits
 * dp[i-1][j] (ignoring the current s character) and, when s[i-1] matches t[j-1], also dp[i-1][j-1]
 * (consuming both). The empty target is always matched exactly once. `line` indexes CODE.
 */
export function distinctSubseqSteps(s: string, t: string): DistinctSubseqStep[] {
  const steps: DistinctSubseqStep[] = [];
  const m = s.length;
  const n = t.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = 1;

  const snap = (o: Partial<DistinctSubseqData>): DistinctSubseqData => ({ s, t, dp: dp.map((r) => [...r]), cur: null, matched: false, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DistinctSubseqData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, "Column 0 = 1: the empty target is formed exactly one way (delete everything).");

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = dp[i - 1][j];
      const matched = s[i - 1] === t[j - 1];
      if (matched) dp[i][j] += dp[i - 1][j - 1];
      push(matched ? 8 : 6, `dp[${i}][${j}]: '${s[i - 1]}' vs '${t[j - 1]}' ${matched ? "match → dp[i-1][j] + dp[i-1][j-1]" : "no match → dp[i-1][j]"} = ${dp[i][j]}.`, { cur: [i, j], matched });
    }
  }

  push(11, `Distinct subsequences of "${s}" equal to "${t}": ${dp[m][n]}.`, { answer: dp[m][n] });
  return steps;
}
