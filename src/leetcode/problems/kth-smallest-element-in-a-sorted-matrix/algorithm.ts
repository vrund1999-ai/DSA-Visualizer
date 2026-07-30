import type { Step } from "@/core/types";

export interface KthMatrixData {
  matrix: number[][];
  k: number;
  lo: number;
  hi: number;
  mid: number | null;
  count: number | null;
  answer: number | null;
}

export type KthMatrixStep = Step<KthMatrixData>;

/**
 * The answer lies between the matrix's min and max, so binary-search the value. Counting how many
 * entries are ≤ mid is O(n) with a staircase walk from the bottom-left (each accepted cell adds its whole
 * column above). Shrinking toward the smallest value with count ≥ k finds the kth smallest. `line` indexes CODE.
 */
export function kthMatrixSteps(matrix: number[][], k: number): KthMatrixStep[] {
  const steps: KthMatrixStep[] = [];
  const n = matrix.length;
  let lo = matrix[0][0];
  let hi = matrix[n - 1][n - 1];

  const snap = (o: Partial<KthMatrixData>): KthMatrixData => ({ matrix, k, lo, hi, mid: null, count: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<KthMatrixData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Binary-search the value in [${lo}, ${hi}] for the ${k}th smallest.`);

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    let count = 0;
    let r = n - 1;
    let c = 0;
    while (r >= 0 && c < n) {
      if (matrix[r][c] <= mid) {
        count += r + 1;
        c++;
      } else r--;
    }
    if (count < k) {
      push(13, `${count} value(s) ≤ ${mid} < k=${k}: search higher.`, { mid, count });
      lo = mid + 1;
    } else {
      push(14, `${count} value(s) ≤ ${mid} ≥ k=${k}: search ≤ ${mid}.`, { mid, count });
      hi = mid;
    }
  }

  push(16, `The ${k}th smallest element is ${lo}.`, { answer: lo });
  return steps;
}
