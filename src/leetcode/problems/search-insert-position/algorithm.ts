import type { Highlight, Step } from "@/core/types";

export interface SearchInsertInput {
  nums: number[];
  target: number;
}

export interface SearchInsertData {
  nums: number[];
  target: number;
  lo: number;
  hi: number;
  mid: number | null;
  answer: number | null;
}

export type SearchInsertStep = Step<SearchInsertData>;

/**
 * Lower-bound binary search: find the first index whose value is ≥ target. That
 * index is where target belongs, whether or not it's already present. `line`
 * indexes CODE.
 */
export function searchInsertSteps(input: SearchInsertInput): SearchInsertStep[] {
  const { nums, target } = input;
  const steps: SearchInsertStep[] = [];
  let lo = 0;
  let hi = nums.length;
  let answer: number | null = null;

  const outside = (): Highlight[] => {
    const hl: Highlight[] = [];
    for (let k = 0; k < nums.length; k++) if (k < lo || k >= hi) hl.push({ ref: k, role: "visited" });
    return hl;
  };
  const snap = (o: Partial<SearchInsertData>): SearchInsertData => ({ nums: [...nums], target, lo, hi, mid: null, answer, ...o });
  const push = (line: number, explanation: string, data: SearchInsertData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, `Binary-search for where ${target} belongs (first value ≥ target).`, snap({}), []);

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] < target) {
      push(4, `nums[${mid}] = ${nums[mid]} < ${target} — insertion point is to the right.`, snap({ mid }), [...outside(), { ref: mid, role: "swapped" }]);
      lo = mid + 1;
    } else {
      push(5, `nums[${mid}] = ${nums[mid]} ≥ ${target} — insertion point is at mid or left.`, snap({ mid }), [...outside(), { ref: mid, role: "current" }]);
      hi = mid;
    }
  }

  answer = lo;
  push(7, `Insert ${target} at index ${lo}.`, snap({ mid: null, answer }), [{ ref: Math.min(lo, nums.length - 1), role: "target" }]);
  return steps;
}
