import type { Highlight } from "@/core/types";
import { cellRef, type TableStep } from "../types";

/**
 * Pure step generator for bottom-up Fibonacci. The DP table is a single row;
 * dp[i] depends on dp[i-1] and dp[i-2]. `line` points into FIBONACCI_CODE.
 */
export function fibonacciSteps(n: number): TableStep[] {
  const N = Math.max(1, Math.min(20, Math.floor(n)));
  const cols = N + 1;
  const dp: (number | null)[] = Array(cols).fill(null);
  const steps: TableStep[] = [];
  let additions = 0;

  const colLabels = Array.from({ length: cols }, (_, i) => String(i));
  const rowLabels = ["dp"];

  const push = (line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { rows: 1, cols, cells: [[...dp]], rowLabels, colLabels },
      highlights,
      metrics: { additions },
    });
  };

  dp[0] = 0;
  if (cols > 1) dp[1] = 1;
  push(0, "Seed the base cases: dp[0] = 0 and dp[1] = 1.", [
    { ref: cellRef(0, 0), role: "current" },
    ...(cols > 1 ? [{ ref: cellRef(0, 1), role: "current" as const }] : []),
  ]);

  for (let i = 2; i <= N; i++) {
    push(2, `dp[${i}] = dp[${i - 1}] + dp[${i - 2}] = ${dp[i - 1]} + ${dp[i - 2]}.`, [
      { ref: cellRef(0, i), role: "current" },
      { ref: cellRef(0, i - 1), role: "compared" },
      { ref: cellRef(0, i - 2), role: "compared" },
    ]);
    dp[i] = (dp[i - 1] as number) + (dp[i - 2] as number);
    additions++;
    push(2, `dp[${i}] = ${dp[i]}.`, [{ ref: cellRef(0, i), role: "current" }]);
  }

  push(4, `Done — the ${N}th Fibonacci number is ${dp[N]}.`, [
    { ref: cellRef(0, N), role: "target" },
  ]);

  return steps;
}
