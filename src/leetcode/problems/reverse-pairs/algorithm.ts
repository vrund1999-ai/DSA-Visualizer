import type { Step } from "@/core/types";

export interface ReversePairsData {
  nums: number[];
  /** current subrange [lo, hi] split at mid */
  lo: number | null;
  mid: number | null;
  hi: number | null;
  /** pairs counted during this merge's counting phase */
  added: number | null;
  count: number;
  answer: number | null;
}

export type ReversePairsStep = Step<ReversePairsData>;

/**
 * A reverse pair is i < j with nums[i] > 2·nums[j]. Merge sort counts them for free: once the
 * two halves are individually sorted, a two-pointer sweep counts, for each left element, how
 * many right elements it dominates — then the halves are merged so the counts bubble up.
 * `line` indexes CODE.
 */
export function reversePairsSteps(input: number[]): ReversePairsStep[] {
  const steps: ReversePairsStep[] = [];
  const nums = [...input];
  let count = 0;

  const snap = (o: Partial<ReversePairsData>): ReversePairsData => ({ nums: [...nums], lo: null, mid: null, hi: null, added: null, count, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ReversePairsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Merge sort while counting pairs where a left value exceeds twice a right value.");

  const sort = (lo: number, hi: number): void => {
    if (lo >= hi) return;
    const mid = (lo + hi) >> 1;
    sort(lo, mid);
    sort(mid + 1, hi);

    let cross = 0;
    let j = mid + 1;
    for (let i = lo; i <= mid; i++) {
      while (j <= hi && nums[i] > 2 * nums[j]) j++;
      cross += j - (mid + 1);
    }
    count += cross;
    push(8, `Range [${lo}..${hi}] split at ${mid}: ${cross} cross pair(s) (total ${count}).`, { lo, mid, hi, added: cross });

    const merged: number[] = [];
    let a = lo;
    let b = mid + 1;
    while (a <= mid && b <= hi) merged.push(nums[a] <= nums[b] ? nums[a++] : nums[b++]);
    while (a <= mid) merged.push(nums[a++]);
    while (b <= hi) merged.push(nums[b++]);
    for (let k = 0; k < merged.length; k++) nums[lo + k] = merged[k];
  };

  sort(0, nums.length - 1);
  push(13, `Total reverse pairs: ${count}.`, { answer: count });
  return steps;
}
