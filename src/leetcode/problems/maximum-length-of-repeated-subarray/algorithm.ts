import type { Step } from "@/core/types";

export interface RepeatedSubData {
  nums1: number[];
  nums2: number[];
  dp: number[][];
  cell: [number, number] | null;
  matched: boolean | null;
  best: number;
  answer: number | null;
}

export type RepeatedSubStep = Step<RepeatedSubData>;

/**
 * dp[i][j] is the length of the longest common subarray ending exactly at nums1[i-1] and nums2[j-1].
 * When the two elements match, the run extends the diagonal predecessor by one; otherwise it breaks to
 * zero. The overall answer is the largest dp value seen. `line` indexes CODE.
 */
export function repeatedSubSteps(nums1: number[], nums2: number[]): RepeatedSubStep[] {
  const steps: RepeatedSubStep[] = [];
  const m = nums1.length;
  const n = nums2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  let best = 0;

  const snap = (o: Partial<RepeatedSubData>): RepeatedSubData => ({ nums1, nums2, dp: dp.map((r) => [...r]), cell: null, matched: null, best, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RepeatedSubData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "dp[i][j] = longest common subarray ending at nums1[i-1] and nums2[j-1].");

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const matched = nums1[i - 1] === nums2[j - 1];
      if (matched) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        best = Math.max(best, dp[i][j]);
        push(8, `${nums1[i - 1]} = ${nums2[j - 1]} → dp[${i}][${j}] = dp[${i - 1}][${j - 1}] + 1 = ${dp[i][j]} (best ${best}).`, { cell: [i, j], matched });
      } else {
        push(6, `${nums1[i - 1]} ≠ ${nums2[j - 1]} → dp[${i}][${j}] = 0.`, { cell: [i, j], matched });
      }
    }
  }

  push(10, `Longest repeated subarray: ${best}.`, { answer: best });
  return steps;
}
