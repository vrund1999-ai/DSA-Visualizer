import type { Highlight } from "@/core/types";
import { cellRef, type TableStep } from "../types";

export interface CoinChangeInput {
  coins: number[];
  amount: number;
}

/**
 * Pure step generator for the min-coins coin-change DP (1D table over amounts).
 * A `null` cell means that amount is currently unreachable (∞). `line` points
 * into COIN_CHANGE_CODE.
 */
export function coinChangeSteps(input: CoinChangeInput): TableStep[] {
  const { coins, amount } = input;
  const cols = amount + 1;
  const dp: (number | null)[] = Array(cols).fill(null);
  const steps: TableStep[] = [];
  let updates = 0;

  const colLabels = Array.from({ length: cols }, (_, a) => String(a));
  const rowLabels = ["min"];

  const push = (line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { rows: 1, cols, cells: [[...dp]], rowLabels, colLabels },
      highlights,
      metrics: { updates },
    });
  };

  dp[0] = 0;
  push(0, `Base case: 0 coins make amount 0; all others start at ∞.`, [
    { ref: cellRef(0, 0), role: "current" },
  ]);

  for (const c of coins) {
    for (let a = c; a < cols; a++) {
      const prev = dp[a - c];
      const highlights: Highlight[] = [
        { ref: cellRef(0, a), role: "current" },
        { ref: cellRef(0, a - c), role: "compared" },
      ];
      if (prev !== null && (dp[a] === null || prev + 1 < (dp[a] as number))) {
        dp[a] = prev + 1;
        updates++;
        push(3, `Coin ${c}: dp[${a}] = dp[${a - c}] + 1 = ${dp[a]}.`, highlights);
      } else {
        push(
          3,
          `Coin ${c}: dp[${a}] stays ${dp[a] === null ? "∞" : dp[a]} (no improvement).`,
          highlights,
        );
      }
    }
  }

  const answer = dp[amount];
  push(
    4,
    answer === null
      ? `Amount ${amount} cannot be made from these coins.`
      : `Fewest coins to make ${amount} is ${answer}.`,
    [{ ref: cellRef(0, amount), role: "target" }],
  );

  return steps;
}
