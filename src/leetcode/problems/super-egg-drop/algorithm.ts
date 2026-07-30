import type { Step } from "@/core/types";

export interface EggDropData {
  k: number;
  n: number;
  /** dp[m][e] = floors coverable with m moves and e eggs */
  dp: number[][];
  /** the [moves, eggs] cell just filled */
  cell: [number, number] | null;
  answer: number | null;
}

export type EggDropStep = Step<EggDropData>;

/**
 * Super Egg Drop: dp[m][e] is how many floors you can definitively test with m moves and e eggs. A move
 * either breaks the egg (test dp[m−1][e−1] floors below) or not (dp[m−1][e] floors above), plus the current
 * floor: dp[m][e] = dp[m−1][e−1] + dp[m−1][e] + 1. The answer is the smallest m with dp[m][k] ≥ n. `line`
 * indexes CODE.
 */
export function eggDropSteps(k: number, n: number): EggDropStep[] {
  const steps: EggDropStep[] = [];
  const dp: number[][] = [new Array(k + 1).fill(0)];
  let m = 0;

  const snap = (o: Partial<EggDropData>): EggDropData => ({
    k,
    n,
    dp: dp.map((r) => [...r]),
    cell: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<EggDropData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `dp[m][e] = floors testable with m moves and e eggs. Grow m until dp[m][${k}] ≥ ${n}.`);

  while (dp[m][k] < n) {
    m++;
    dp[m] = [0];
    for (let e = 1; e <= k; e++) {
      dp[m][e] = dp[m - 1][e - 1] + dp[m - 1][e] + 1;
    }
    push(8, `${m} move(s): dp[${m}][${k}] = ${dp[m][k]} (need ${n}).`, { cell: [m, k] });
  }

  push(10, `Fewest moves = ${m}.`, { answer: m });
  return steps;
}
