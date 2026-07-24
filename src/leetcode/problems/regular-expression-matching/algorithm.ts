import type { Step } from "@/core/types";

export interface RegexData {
  s: string;
  p: string;
  dp: boolean[][];
  filled: boolean[][];
  cur: [number, number] | null;
  answer: boolean | null;
}

export type RegexStep = Step<RegexData>;

const match = (sc: string, pc: string) => pc === "." || pc === sc;

/**
 * Classic regex DP with '.' (any char) and '*' (zero-or-more of the preceding token).
 * dp[i][j] = does s[0..i) match p[0..j). A '*' either drops its token (dp[i][j-2]) or
 * consumes one matching char (dp[i-1][j]). `line` indexes CODE.
 */
export function regexSteps(s: string, p: string): RegexStep[] {
  const steps: RegexStep[] = [];
  const m = s.length;
  const n = p.length;
  const dp = Array.from({ length: m + 1 }, () => new Array<boolean>(n + 1).fill(false));
  const filled = Array.from({ length: m + 1 }, () => new Array<boolean>(n + 1).fill(false));

  const snap = (o: Partial<RegexData>): RegexData => ({ s, p, dp: dp.map((r) => [...r]), filled: filled.map((r) => [...r]), cur: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: RegexData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  dp[0][0] = true;
  filled[0][0] = true;
  push(3, "Empty pattern matches empty string.", snap({ cur: [0, 0] }));

  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === "*") dp[0][j] = dp[0][j - 2];
    filled[0][j] = true;
    push(5, `dp[0][${j}] = ${dp[0][j]} (pattern vs empty string).`, snap({ cur: [0, j] }));
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === "*") {
        dp[i][j] = dp[i][j - 2] || (match(s[i - 1], p[j - 2]) && dp[i - 1][j]);
        filled[i][j] = true;
        push(9, `'${p[j - 1]}' star: '${s[i - 1]}' vs '${p[j - 2]}' → dp[${i}][${j}] = ${dp[i][j]}.`, snap({ cur: [i, j] }));
      } else {
        dp[i][j] = match(s[i - 1], p[j - 1]) && dp[i - 1][j - 1];
        filled[i][j] = true;
        push(12, `'${s[i - 1]}' vs '${p[j - 1]}' → dp[${i}][${j}] = ${dp[i][j]}.`, snap({ cur: [i, j] }));
      }
    }
  }

  push(16, `s ${dp[m][n] ? "matches" : "does not match"} p.`, snap({ cur: [m, n], answer: dp[m][n] }));
  return steps;
}
