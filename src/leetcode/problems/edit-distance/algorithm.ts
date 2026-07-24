import type { Highlight, Step } from "@/core/types";

export interface EditDistanceInput {
  a: string;
  b: string;
}

export interface EditDistanceData {
  a: string;
  b: string;
  dp: number[][];
  r: number | null;
  c: number | null;
  match: boolean | null;
}

export type EditDistanceStep = Step<EditDistanceData>;

/**
 * dp[i][j] = edit distance between a's first i chars and b's first j chars.
 * Matching characters inherit the diagonal; otherwise it's 1 plus the cheapest of
 * replace (diagonal), delete (up) and insert (left). `line` indexes CODE.
 */
export function editDistanceSteps(input: EditDistanceInput): EditDistanceStep[] {
  const { a, b } = input;
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  const steps: EditDistanceStep[] = [];

  const snap = (r: number | null, c: number | null, match: boolean | null): EditDistanceData => ({ a, b, dp: dp.map((row) => [...row]), r, c, match });
  const push = (line: number, explanation: string, data: EditDistanceData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(4, "Row 0 / column 0 are pure inserts / deletes.", snap(null, null, null), []);

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const match = a[i - 1] === b[j - 1];
      dp[i][j] = match ? dp[i - 1][j - 1] : 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
      const hl: Highlight[] = [
        { ref: `${i},${j}`, role: "target" },
        { ref: `${i - 1},${j - 1}`, role: "compared" },
      ];
      if (!match) {
        hl.push({ ref: `${i - 1},${j}`, role: "compared" }, { ref: `${i},${j - 1}`, role: "compared" });
      }
      push(match ? 8 : 9, match ? `'${a[i - 1]}' = '${b[j - 1]}' — inherit diagonal ${dp[i][j]}.` : `'${a[i - 1]}' ≠ '${b[j - 1]}' — 1 + min(neighbours) = ${dp[i][j]}.`, snap(i, j, match), hl);
    }
  }

  push(11, `Edit distance is ${dp[m][n]}.`, snap(m, n, null), [{ ref: `${m},${n}`, role: "target" }]);
  return steps;
}
