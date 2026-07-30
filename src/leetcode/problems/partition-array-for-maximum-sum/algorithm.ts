import type { Step } from "@/core/types";

export interface PartitionData {
  arr: number[];
  k: number;
  dp: number[];
  /** current prefix length i (dp index) */
  i: number | null;
  /** block length j being tried; covers arr[i-j .. i-1] */
  j: number | null;
  cur: number;
  answer: number | null;
}

export type PartitionStep = Step<PartitionData>;

/**
 * dp[i] is the best sum achievable for the first i elements. The last block has length 1…k; extending
 * it one element at a time keeps a running max, and each choice pairs that block's contribution
 * (max × length) with the already-solved prefix dp[i−j]. `line` indexes CODE.
 */
export function partitionSteps(arr: number[], k: number): PartitionStep[] {
  const steps: PartitionStep[] = [];
  const n = arr.length;
  const dp = new Array(n + 1).fill(0);

  const snap = (o: Partial<PartitionData>): PartitionData => ({ arr, k, dp: [...dp], i: null, j: null, cur: 0, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PartitionData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `dp[i] = best sum for the first i elements; blocks up to length k=${k}.`);

  for (let i = 1; i <= n; i++) {
    let cur = 0;
    for (let j = 1; j <= k && j <= i; j++) {
      cur = Math.max(cur, arr[i - j]);
      const candidate = dp[i - j] + cur * j;
      if (candidate > dp[i]) {
        dp[i] = candidate;
        push(7, `dp[${i}]: last block arr[${i - j}..${i - 1}] (max ${cur} × ${j}) + dp[${i - j}] = ${candidate}.`, { i, j, cur });
      } else {
        push(6, `dp[${i}]: block of ${j} gives ${candidate} ≤ ${dp[i]}, keep.`, { i, j, cur });
      }
    }
  }

  push(11, `Maximum sum after partitioning: ${dp[n]}.`, { answer: dp[n] });
  return steps;
}
