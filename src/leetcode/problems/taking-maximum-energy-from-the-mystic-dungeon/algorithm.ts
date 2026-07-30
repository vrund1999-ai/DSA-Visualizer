import type { Step } from "@/core/types";

export interface EnergyData {
  energy: number[];
  k: number;
  dp: number[];
  i: number | null;
  best: number;
  bestStart: number | null;
  answer: number | null;
}

export type EnergyStep = Step<EnergyData>;

/**
 * Starting at index i, you absorb energy[i], energy[i+k], energy[i+2k], … so dp[i] = energy[i] + dp[i+k].
 * Filling from the right computes every chain's total in one pass; the best start is the maximum. `line`
 * indexes CODE.
 */
export function energySteps(energy: number[], k: number): EnergyStep[] {
  const steps: EnergyStep[] = [];
  const n = energy.length;
  const dp = [...energy];
  let best = -Infinity;
  let bestStart: number | null = null;

  const snap = (o: Partial<EnergyData>): EnergyData => ({ energy, k, dp: [...dp], i: null, best, bestStart, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<EnergyData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `dp[i] = energy gained starting at i, teleporting +${k} each step.`);

  for (let i = n - 1; i >= 0; i--) {
    if (i + k < n) dp[i] += dp[i + k];
    if (dp[i] > best) {
      best = dp[i];
      bestStart = i;
    }
    push(7, `dp[${i}] = ${energy[i]}${i + k < n ? ` + dp[${i + k}]=${dp[i + k]}` : ""} = ${dp[i]} (best ${best}).`, { i });
  }

  push(9, `Maximum energy: ${best} (start at index ${bestStart}).`, { answer: best });
  return steps;
}
