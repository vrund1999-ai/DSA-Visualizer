import type { Step } from "@/core/types";

export interface OnesZeroesData {
  m: number;
  n: number;
  dp: number[][];
  /** the string just processed, with its costs */
  current: { s: string; zeros: number; ones: number } | null;
  strsDone: number;
  answer: number | null;
}

export type OnesZeroesStep = Step<OnesZeroesData>;

/**
 * Each string is an item costing (zeros, ones) in a two-dimensional 0/1 knapsack. dp[i][j] is the most
 * strings fitting a budget of i zeros and j ones; processing capacities in decreasing order keeps each
 * string used at most once. `line` indexes CODE.
 */
export function onesZeroesSteps(strs: string[], m: number, n: number): OnesZeroesStep[] {
  const steps: OnesZeroesStep[] = [];
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  const snap = (o: Partial<OnesZeroesData>): OnesZeroesData => ({ m, n, dp: dp.map((r) => [...r]), current: null, strsDone: 0, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<OnesZeroesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `dp[i][j] = most strings using ≤ i zeros and ≤ j ones. Budget: ${m} zeros, ${n} ones.`);

  let done = 0;
  for (const s of strs) {
    const zeros = s.split("").filter((ch) => ch === "0").length;
    const ones = s.length - zeros;
    for (let i = m; i >= zeros; i--) for (let j = n; j >= ones; j--) dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
    done++;
    push(9, `Add "${s}" (${zeros} zeros, ${ones} ones); dp[${m}][${n}] = ${dp[m][n]}.`, { current: { s, zeros, ones }, strsDone: done });
  }

  push(11, `Largest subset: ${dp[m][n]} strings.`, { answer: dp[m][n], strsDone: done });
  return steps;
}
