import type { Step } from "@/core/types";

export interface WildcardData {
  s: string;
  p: string;
  dp: boolean[][];
  filled: boolean[][];
  cur: [number, number] | null;
  answer: boolean | null;
}

export type WildcardStep = Step<WildcardData>;

/**
 * Wildcard DP where '?' matches any single character and '*' matches any sequence
 * (including empty). For '*', dp[i][j] is true if the star is empty (dp[i][j-1]) or
 * it absorbs one more char of s (dp[i-1][j]). `line` indexes CODE.
 */
export function wildcardSteps(s: string, p: string): WildcardStep[] {
  const steps: WildcardStep[] = [];
  const m = s.length;
  const n = p.length;
  const dp = Array.from({ length: m + 1 }, () => new Array<boolean>(n + 1).fill(false));
  const filled = Array.from({ length: m + 1 }, () => new Array<boolean>(n + 1).fill(false));

  const snap = (o: Partial<WildcardData>): WildcardData => ({ s, p, dp: dp.map((r) => [...r]), filled: filled.map((r) => [...r]), cur: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: WildcardData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  dp[0][0] = true;
  filled[0][0] = true;
  push(3, "Empty pattern matches empty string.", snap({ cur: [0, 0] }));

  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === "*") dp[0][j] = dp[0][j - 1];
    filled[0][j] = true;
    push(5, `dp[0][${j}] = ${dp[0][j]} — only leading '*'s match empty s.`, snap({ cur: [0, j] }));
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === "*") {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
        filled[i][j] = true;
        push(9, `'*' at p[${j - 1}] → dp[${i}][${j}] = ${dp[i][j]}.`, snap({ cur: [i, j] }));
      } else if (p[j - 1] === "?" || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
        filled[i][j] = true;
        push(12, `'${s[i - 1]}' vs '${p[j - 1]}' match → dp[${i}][${j}] = ${dp[i][j]}.`, snap({ cur: [i, j] }));
      } else {
        filled[i][j] = true;
        push(11, `'${s[i - 1]}' ≠ '${p[j - 1]}' → dp[${i}][${j}] = false.`, snap({ cur: [i, j] }));
      }
    }
  }

  push(16, `s ${dp[m][n] ? "matches" : "does not match"} p.`, snap({ cur: [m, n], answer: dp[m][n] }));
  return steps;
}
