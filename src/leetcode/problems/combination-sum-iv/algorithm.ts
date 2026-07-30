import type { Step } from "@/core/types";

export interface CombSum4Data {
  nums: number[];
  target: number;
  dp: number[];
  t: number | null;
  /** the source cells t - num being summed */
  sources: number[];
  answer: number | null;
}

export type CombSum4Step = Step<CombSum4Data>;

/**
 * Because order matters, a combination summing to t is any smaller combination summing to t − num with
 * `num` appended. So dp[t] sums dp[t − num] over every usable num, building up from dp[0] = 1. `line`
 * indexes CODE.
 */
export function combSum4Steps(nums: number[], target: number): CombSum4Step[] {
  const steps: CombSum4Step[] = [];
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  const snap = (o: Partial<CombSum4Data>): CombSum4Data => ({ nums, target, dp: [...dp], t: null, sources: [], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CombSum4Data> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `dp[t] = number of ordered combinations summing to t; dp[0] = 1.`);

  for (let t = 1; t <= target; t++) {
    const sources: number[] = [];
    for (const num of nums) {
      if (num <= t) {
        dp[t] += dp[t - num];
        sources.push(t - num);
      }
    }
    push(6, `dp[${t}] = ${sources.map((s) => `dp[${s}]`).join(" + ")} = ${dp[t]}.`, { t, sources });
  }

  push(9, `Combinations summing to ${target}: ${dp[target]}.`, { answer: dp[target] });
  return steps;
}
