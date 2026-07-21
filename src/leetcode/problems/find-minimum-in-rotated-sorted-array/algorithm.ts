import type { Highlight, Step } from "@/core/types";

export interface FindMinData {
  nums: number[];
  lo: number;
  hi: number;
  mid: number | null;
  answer: number | null;
}

export type FindMinStep = Step<FindMinData>;

/**
 * Binary search on rotation: if nums[mid] > nums[hi] the minimum must be to the
 * right of mid; otherwise it's at mid or to its left. The range converges on the
 * rotation point — the minimum. `line` indexes CODE.
 */
export function findMinSteps(nums: number[]): FindMinStep[] {
  const steps: FindMinStep[] = [];
  let lo = 0;
  let hi = nums.length - 1;
  let answer: number | null = null;

  const outside = (): Highlight[] => {
    const hl: Highlight[] = [];
    for (let k = 0; k < nums.length; k++) if (k < lo || k > hi) hl.push({ ref: k, role: "visited" });
    return hl;
  };
  const snap = (o: Partial<FindMinData>): FindMinData => ({ nums: [...nums], lo, hi, mid: null, answer, ...o });
  const push = (line: number, explanation: string, data: FindMinData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Binary-search for the rotation point (the minimum).", snap({}), []);

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] > nums[hi]) {
      push(4, `nums[${mid}] = ${nums[mid]} > nums[${hi}] = ${nums[hi]} — minimum is to the right.`, snap({ mid }), [
        ...outside(),
        { ref: mid, role: "current" },
        { ref: hi, role: "compared" },
      ]);
      lo = mid + 1;
    } else {
      push(5, `nums[${mid}] = ${nums[mid]} ≤ nums[${hi}] = ${nums[hi]} — minimum is at mid or left.`, snap({ mid }), [
        ...outside(),
        { ref: mid, role: "current" },
        { ref: hi, role: "compared" },
      ]);
      hi = mid;
    }
  }

  answer = nums[lo];
  push(7, `Converged — the minimum is ${nums[lo]} at index ${lo}.`, snap({ mid: null, answer }), [{ ref: lo, role: "target" }]);
  return steps;
}
