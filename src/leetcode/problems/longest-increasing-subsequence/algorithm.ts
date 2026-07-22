import type { Highlight, Step } from "@/core/types";

export interface LISData {
  nums: number[];
  dp: number[];
  i: number | null;
  j: number | null;
  best: number;
}

export type LISStep = Step<LISData>;

/**
 * O(n²) DP: dp[i] is the length of the longest increasing subsequence ending at
 * i. Each i looks back at every earlier j with a smaller value and extends that
 * subsequence. `line` indexes CODE.
 */
export function lisSteps(nums: number[]): LISStep[] {
  const steps: LISStep[] = [];
  const dp = new Array(nums.length).fill(1);
  let best = nums.length ? 1 : 0;

  const snap = (o: Partial<LISData>): LISData => ({ nums: [...nums], dp: [...dp], i: null, j: null, best, ...o });
  const push = (line: number, explanation: string, data: LISData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { best } });
  };

  push(1, "dp[i] = length of the longest increasing subsequence ending at i (all start at 1).", snap({}), []);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        const cand = dp[j] + 1;
        const improved = cand > dp[i];
        if (improved) dp[i] = cand;
        push(6, `nums[${j}] = ${nums[j]} < nums[${i}] = ${nums[i]} — dp[${i}] = max(dp[${i}], dp[${j}] + 1) = ${dp[i]}.`, snap({ i, j }), [
          { ref: j, role: "compared" },
          { ref: i, role: improved ? "target" : "current" },
        ]);
      } else {
        push(5, `nums[${j}] = ${nums[j]} ≥ nums[${i}] = ${nums[i]} — can't extend.`, snap({ i, j }), [
          { ref: j, role: "visited" },
          { ref: i, role: "current" },
        ]);
      }
    }
    if (dp[i] > best) best = dp[i];
    push(7, `Longest ending at ${i} is ${dp[i]} (best ${best}).`, snap({ i }), [{ ref: i, role: "sorted" }]);
  }

  push(9, `Longest increasing subsequence length is ${best}.`, snap({ i: null }), []);
  return steps;
}
