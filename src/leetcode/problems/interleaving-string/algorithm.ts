import type { Step } from "@/core/types";

export interface InterleaveData {
  s1: string;
  s2: string;
  s3: string;
  dp: boolean[][];
  filled: boolean[][];
  cur: [number, number] | null;
  answer: boolean | null;
}

export type InterleaveStep = Step<InterleaveData>;

/**
 * dp[i][j] = can s3[0..i+j) be interleaved from s1[0..i) and s2[0..j). Each cell is
 * reachable if we can arrive from the top (consuming an s1 char) or the left
 * (consuming an s2 char) and that char matches s3. `line` indexes CODE.
 */
export function interleaveSteps(s1: string, s2: string, s3: string): InterleaveStep[] {
  const steps: InterleaveStep[] = [];
  const m = s1.length;
  const n = s2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array<boolean>(n + 1).fill(false));
  const filled = Array.from({ length: m + 1 }, () => new Array<boolean>(n + 1).fill(false));

  const snap = (o: Partial<InterleaveData>): InterleaveData => ({ s1, s2, s3, dp: dp.map((r) => [...r]), filled: filled.map((r) => [...r]), cur: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: InterleaveData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  if (m + n !== s3.length) {
    push(2, `Lengths ${m} + ${n} ≠ ${s3.length} — impossible.`, snap({ answer: false }));
    return steps;
  }

  dp[0][0] = true;
  filled[0][0] = true;
  push(4, "dp[i][j] = s3[0..i+j) interleaves s1[0..i) and s2[0..j).", snap({ cur: [0, 0] }));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 && j === 0) continue;
      let ok = false;
      if (i > 0 && dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ok = true;
      if (j > 0 && dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]) ok = true;
      dp[i][j] = ok;
      filled[i][j] = true;
      push(8, `dp[${i}][${j}] = ${ok} (target char '${s3[i + j - 1]}').`, snap({ cur: [i, j] }));
    }
  }

  push(13, `s3 ${dp[m][n] ? "is" : "is not"} an interleaving.`, snap({ cur: [m, n], answer: dp[m][n] }));
  return steps;
}
