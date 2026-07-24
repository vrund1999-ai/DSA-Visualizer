import type { Highlight, Step } from "@/core/types";

export interface FibData {
  n: number;
  dp: number[];
  i: number | null;
}

export type FibStep = Step<FibData>;

/**
 * Bottom-up DP: each Fibonacci number is the sum of the previous two. Fill the
 * table from the two base cases up to n. `line` indexes CODE.
 */
export function fibSteps(n: number): FibStep[] {
  const steps: FibStep[] = [];
  const dp = n < 2 ? Array.from({ length: n + 1 }, (_, i) => i) : [0, 1];

  const snap = (o: Partial<FibData>): FibData => ({ n, dp: [...dp], i: null, ...o });
  const push = (line: number, explanation: string, data: FibData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { fib: dp[Math.min(dp.length - 1, n)] } });
  };

  push(2, "Start from the base cases fib(0)=0, fib(1)=1.", snap({}), [
    { ref: 0, role: "sorted" },
    ...(n >= 1 ? [{ ref: 1, role: "sorted" as const }] : []),
  ]);

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
    push(4, `fib(${i}) = fib(${i - 1}) + fib(${i - 2}) = ${dp[i - 1]} + ${dp[i - 2]} = ${dp[i]}.`, snap({ i }), [
      { ref: i - 1, role: "compared" },
      { ref: i - 2, role: "compared" },
      { ref: i, role: "target" },
    ]);
  }

  push(5, `fib(${n}) = ${dp[n]}.`, snap({ i: null }), [{ ref: n, role: "target" }]);
  return steps;
}
