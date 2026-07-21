import type { Highlight, Step } from "@/core/types";

export interface ClimbData {
  n: number;
  dp: number[];
  i: number | null;
}

export type ClimbStep = Step<ClimbData>;

/**
 * Bottom-up DP: the number of ways to reach step i is the ways to reach i−1
 * (take a single step) plus the ways to reach i−2 (take a double step) — the
 * Fibonacci recurrence. `line` indexes CODE.
 */
export function climbSteps(n: number): ClimbStep[] {
  const steps: ClimbStep[] = [];
  const dp = [1, 1];

  const snap = (o: Partial<ClimbData>): ClimbData => ({
    n,
    dp: [...dp],
    i: null,
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: ClimbData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { ways: dp[Math.min(dp.length - 1, n)] } });
  };

  push(1, "There is 1 way to stand at the bottom, and 1 way to reach step 1.", snap({}), [
    { ref: 0, role: "sorted" },
    { ref: 1, role: "sorted" },
  ]);

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
    push(
      3,
      `Step ${i}: ways = dp[${i - 1}] + dp[${i - 2}] = ${dp[i - 1]} + ${dp[i - 2]} = ${dp[i]}.`,
      snap({ i }),
      [
        { ref: i - 2, role: "compared" },
        { ref: i - 1, role: "compared" },
        { ref: i, role: "target" },
      ],
    );
  }

  push(5, `There are ${dp[n]} distinct ways to climb ${n} steps.`, snap({ i: null }), [
    { ref: n, role: "target" },
  ]);
  return steps;
}
