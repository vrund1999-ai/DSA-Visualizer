import type { Step } from "@/core/types";

export interface KnightData {
  n: number;
  /** count of numbers of the current length ending at each digit */
  dp: number[];
  /** hop index (1-based length of numbers represented by dp) */
  length: number;
  total: number;
  answer: number | null;
}

export type KnightStep = Step<KnightData>;

const MOD = 1e9 + 7;
export const MOVES = [
  [4, 6],
  [6, 8],
  [7, 9],
  [4, 8],
  [3, 9, 0],
  [],
  [1, 7, 0],
  [2, 6],
  [1, 3],
  [2, 4],
];

/**
 * Each digit reachable in one knight move defines the keypad graph. dp[d] counts numbers of the current
 * length ending at digit d; one more hop distributes each count to the digits a knight can jump to. The
 * answer sums dp after n−1 hops. `line` indexes CODE.
 */
export function knightSteps(n: number): KnightStep[] {
  const steps: KnightStep[] = [];
  let dp = new Array(10).fill(1);

  const total = () => dp.reduce((a, b) => (a + b) % MOD, 0);
  const snap = (o: Partial<KnightData>): KnightData => ({ n, dp: [...dp], length: 1, total: total(), answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<KnightData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(4, `Length-1 numbers: each of the 10 digits counts once.`, { length: 1 });

  for (let step = 1; step < n; step++) {
    const next = new Array(10).fill(0);
    for (let d = 0; d < 10; d++) for (const m of MOVES[d]) next[m] = (next[m] + dp[d]) % MOD;
    dp = next;
    push(9, `After ${step + 1}-digit numbers: distribute each count along knight moves.`, { length: step + 1 });
  }

  const answer = total();
  push(12, `Total distinct ${n}-digit numbers: ${answer}.`, { answer });
  return steps;
}
