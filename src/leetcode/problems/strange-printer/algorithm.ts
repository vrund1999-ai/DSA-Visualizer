import type { Step } from "@/core/types";

export interface PrinterData {
  s: string;
  dp: number[][];
  filled: boolean[][];
  cur: [number, number] | null;
  answer: number | null;
}

export type PrinterStep = Step<PrinterData>;

/**
 * dp[i][j] is the fewest print turns for substring s[i..j]. Printing s[j] on its own gives dp[i][j−1]+1,
 * but if some earlier position k shares s[j]'s character, one print can cover both ends, merging
 * dp[i][k] with the interior dp[k+1][j−1]. Intervals fill by increasing length. `line` indexes CODE.
 */
export function printerSteps(s: string): PrinterStep[] {
  const steps: PrinterStep[] = [];
  const n = s.length;
  const dp = Array.from({ length: n }, () => new Array(n).fill(0));
  const filled = Array.from({ length: n }, () => new Array(n).fill(false));

  const snap = (o: Partial<PrinterData>): PrinterData => ({ s, dp: dp.map((r) => [...r]), filled: filled.map((r) => [...r]), cur: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PrinterData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
    filled[i][i] = true;
  }
  push(3, "Base case: a single character needs one print.");

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;
      dp[i][j] = dp[i][j - 1] + 1;
      for (let k = i; k < j; k++) {
        if (s[k] === s[j]) {
          const inner = k + 1 <= j - 1 ? dp[k + 1][j - 1] : 0;
          dp[i][j] = Math.min(dp[i][j], dp[i][k] + inner);
        }
      }
      filled[i][j] = true;
      push(7, `s[${i}..${j}] "${s.slice(i, j + 1)}": min turns ${dp[i][j]}.`, { cur: [i, j] });
    }
  }

  push(13, `Minimum print turns: ${dp[0][n - 1]}.`, { answer: dp[0][n - 1] });
  return steps;
}
