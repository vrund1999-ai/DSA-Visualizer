import type { Step } from "@/core/types";

export interface CountBitsData {
  n: number;
  dp: number[];
  /** index being filled */
  i: number | null;
  /** the already-computed dp[i>>1] this step reads */
  half: number | null;
  lastBit: number | null;
  answer: number[] | null;
}

export type CountBitsStep = Step<CountBitsData>;

/**
 * Dropping i's lowest bit gives i >> 1, which has the same one-bits except that removed last one. So
 * dp[i] = dp[i >> 1] + (i & 1) reuses an already-computed answer, filling the whole table in O(n).
 * `line` indexes CODE.
 */
export function countBitsSteps(n: number): CountBitsStep[] {
  const steps: CountBitsStep[] = [];
  const dp = new Array(n + 1).fill(0);

  const snap = (o: Partial<CountBitsData>): CountBitsData => ({ n, dp: [...dp], i: null, half: null, lastBit: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CountBitsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "dp[0] = 0. Each dp[i] reuses dp[i>>1] plus i's last bit.");

  for (let i = 1; i <= n; i++) {
    const half = i >> 1;
    const lastBit = i & 1;
    dp[i] = dp[half] + lastBit;
    push(3, `dp[${i}] = dp[${half}] (${dp[half]}) + ${lastBit} = ${dp[i]} (${i.toString(2)} has ${dp[i]} ones).`, { i, half, lastBit });
  }

  push(6, `Bit counts for 0..${n}: [${dp.join(", ")}].`, { answer: [...dp] });
  return steps;
}
