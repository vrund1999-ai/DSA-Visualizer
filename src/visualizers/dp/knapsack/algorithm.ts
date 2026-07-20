import type { Highlight } from "@/core/types";
import { cellRef, type TableStep } from "../types";

export interface KnapsackInput {
  weights: number[];
  values: number[];
  capacity: number;
}

/**
 * Pure step generator for the 0/1 knapsack DP. dp[i][w] is the best value using
 * the first i items within capacity w; each cell depends on the row above.
 * `line` points into KNAPSACK_CODE.
 */
export function knapsackSteps(input: KnapsackInput): TableStep[] {
  const { weights, values, capacity } = input;
  const n = weights.length;
  const cols = capacity + 1;
  const rows = n + 1;
  const dp: (number | null)[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(null),
  );
  const steps: TableStep[] = [];
  let comparisons = 0;

  const colLabels = Array.from({ length: cols }, (_, w) => String(w));
  const rowLabels = ["∅", ...values.map((v, i) => `$${v}/${weights[i]}kg`)];

  const snapshot = () => dp.map((row) => [...row]);
  const push = (line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { rows, cols, cells: snapshot(), rowLabels, colLabels },
      highlights,
      metrics: { capacity, comparisons },
    });
  };

  for (let w = 0; w < cols; w++) dp[0][w] = 0;
  push(
    0,
    "Base case: with no items, the best value is 0 for every capacity.",
    Array.from({ length: cols }, (_, w) => ({ ref: cellRef(0, w), role: "current" as const })),
  );

  for (let i = 1; i <= n; i++) {
    const wt = weights[i - 1];
    const val = values[i - 1];
    for (let w = 0; w < cols; w++) {
      const highlights: Highlight[] = [
        { ref: cellRef(i, w), role: "current" },
        { ref: cellRef(i - 1, w), role: "compared" },
      ];
      if (wt <= w) {
        comparisons++;
        const take = val + (dp[i - 1][w - wt] as number);
        const skip = dp[i - 1][w] as number;
        highlights.push({ ref: cellRef(i - 1, w - wt), role: "compared" });
        dp[i][w] = Math.max(skip, take);
        push(
          4,
          `Item ${i} (value ${val}, weight ${wt}) fits: max(skip ${skip}, take ${take}) = ${dp[i][w]}.`,
          highlights,
        );
      } else {
        dp[i][w] = dp[i - 1][w];
        push(
          6,
          `Item ${i} (weight ${wt}) doesn't fit in capacity ${w} — carry ${dp[i][w]} down.`,
          highlights,
        );
      }
    }
  }

  push(7, `Best value within capacity ${capacity} is ${dp[n][capacity]}.`, [
    { ref: cellRef(n, capacity), role: "target" },
  ]);

  return steps;
}
