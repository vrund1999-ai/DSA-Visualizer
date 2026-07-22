import type { Highlight, Step } from "@/core/types";

export interface PartitionData {
  nums: number[];
  dp: boolean[];
  target: number;
  currentNum: number | null;
  s: number | null;
  result: boolean | null;
}

export type PartitionStep = Step<PartitionData>;

/**
 * The array splits into two equal halves iff some subset sums to total/2, a 0/1
 * knapsack. dp[s] means "sum s is reachable"; each number is offered once,
 * scanning sums downward so it isn't reused. `line` indexes CODE.
 */
export function partitionSteps(nums: number[]): PartitionStep[] {
  const steps: PartitionStep[] = [];
  const total = nums.reduce((a, b) => a + b, 0);

  const snap = (dp: boolean[], target: number, currentNum: number | null, s: number | null, result: boolean | null): PartitionData => ({
    nums: [...nums],
    dp: [...dp],
    target,
    currentNum,
    s,
    result,
  });
  const push = (line: number, explanation: string, data: PartitionData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  if (total % 2 === 1) {
    push(2, `Total ${total} is odd — it can't split into two equal halves.`, snap([], 0, null, null, false), []);
    return steps;
  }

  const target = total / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  push(5, `Target per half is ${target}. dp[s] = "sum s is reachable"; dp[0] is true.`, snap(dp, target, null, null, null), [{ ref: 0, role: "sorted" }]);

  for (const x of nums) {
    push(6, `Offer ${x}; update reachable sums from high to low.`, snap(dp, target, x, null, null), []);
    for (let s = target; s >= x; s--) {
      if (!dp[s] && dp[s - x]) {
        dp[s] = true;
        push(8, `dp[${s}] becomes reachable via dp[${s - x}] + ${x}.`, snap(dp, target, x, s, null), [
          { ref: s - x, role: "compared" },
          { ref: s, role: "target" },
        ]);
      }
    }
  }

  push(9, dp[target] ? `dp[${target}] is reachable — an equal partition exists.` : `dp[${target}] is unreachable — no equal partition.`, snap(dp, target, null, null, dp[target]), [
    { ref: target, role: dp[target] ? "target" : "swapped" },
  ]);
  return steps;
}
