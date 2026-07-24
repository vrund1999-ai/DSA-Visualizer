import type { Step } from "@/core/types";

export interface KthMissingData {
  arr: number[];
  k: number;
  lo: number;
  hi: number;
  mid: number | null;
  /** count of missing positives before index mid */
  missingBefore: number | null;
  answer: number | null;
}

export type KthMissingStep = Step<KthMissingData>;

/**
 * At index i, the count of missing positives before it is arr[i] − (i + 1). This is
 * monotonic, so binary search the first index where the missing count reaches k; the
 * answer is that index offset plus k. `line` indexes CODE.
 */
export function kthMissingSteps(arr: number[], k: number): KthMissingStep[] {
  const steps: KthMissingStep[] = [];
  let lo = 0;
  let hi = arr.length;

  const snap = (o: Partial<KthMissingData>): KthMissingData => ({ arr: [...arr], k, lo, hi, mid: null, missingBefore: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: KthMissingData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Binary search for the ${k}th missing positive.`, snap({}));

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    const missingBefore = arr[mid] - (mid + 1);
    if (missingBefore < k) {
      push(5, `arr[${mid}]=${arr[mid]} hides ${missingBefore} < ${k} missing — go right.`, snap({ mid, missingBefore }));
      lo = mid + 1;
    } else {
      push(6, `arr[${mid}]=${arr[mid]} hides ${missingBefore} ≥ ${k} missing — go left.`, snap({ mid, missingBefore }));
      hi = mid;
    }
  }

  push(8, `The ${k}th missing positive is ${lo + k}.`, snap({ answer: lo + k }));
  return steps;
}
