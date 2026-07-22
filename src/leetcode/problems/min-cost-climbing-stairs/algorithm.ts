import type { Highlight, Step } from "@/core/types";

export interface MinCostData {
  cost: number[];
  dp: number[];
  i: number | null;
}

export type MinCostStep = Step<MinCostData>;

/**
 * dp[i] is the cheapest cost to reach step i (the top is index cost.length). You
 * arrive from one step below or two below, paying that step's cost. `line`
 * indexes CODE.
 */
export function minCostSteps(cost: number[]): MinCostStep[] {
  const steps: MinCostStep[] = [];
  const dp = [0, 0];

  const snap = (o: Partial<MinCostData>): MinCostData => ({ cost: [...cost], dp: [...dp], i: null, ...o });
  const push = (line: number, explanation: string, data: MinCostData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "You can start free at step 0 or 1; dp[i] = cheapest way to reach step i.", snap({}), []);

  for (let i = 2; i <= cost.length; i++) {
    const fromOne = dp[i - 1] + cost[i - 1];
    const fromTwo = dp[i - 2] + cost[i - 2];
    dp[i] = Math.min(fromOne, fromTwo);
    push(
      3,
      `dp[${i}] = min(dp[${i - 1}]+${cost[i - 1]}=${fromOne}, dp[${i - 2}]+${cost[i - 2]}=${fromTwo}) = ${dp[i]}.`,
      snap({ i }),
      [
        { ref: i - 1, role: fromOne <= fromTwo ? "compared" : "visited" },
        { ref: i - 2, role: fromTwo < fromOne ? "compared" : "visited" },
        { ref: i, role: "target" },
      ],
    );
  }

  push(6, `Minimum cost to reach the top is ${dp[cost.length]}.`, snap({ i: cost.length }), [
    { ref: cost.length, role: "target" },
  ]);
  return steps;
}
