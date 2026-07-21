import type { Highlight, Step } from "@/core/types";

export interface RotatedSearchInput {
  nums: number[];
  target: number;
}

export interface RotatedSearchData {
  nums: number[];
  target: number;
  lo: number;
  hi: number;
  mid: number | null;
  found: number | null;
}

export type RotatedSearchStep = Step<RotatedSearchData>;

/**
 * Modified binary search: at each mid, one side [lo..mid] or [mid..hi] is still
 * sorted. Check whether the target lies within that sorted half to decide which
 * way to go. `line` indexes CODE.
 */
export function rotatedSearchSteps(input: RotatedSearchInput): RotatedSearchStep[] {
  const { nums, target } = input;
  const steps: RotatedSearchStep[] = [];
  let lo = 0;
  let hi = nums.length - 1;
  let found: number | null = null;

  const outside = (): Highlight[] => {
    const hl: Highlight[] = [];
    for (let k = 0; k < nums.length; k++) if (k < lo || k > hi) hl.push({ ref: k, role: "visited" });
    return hl;
  };
  const snap = (o: Partial<RotatedSearchData>): RotatedSearchData => ({
    nums: [...nums],
    target,
    lo,
    hi,
    mid: null,
    found,
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: RotatedSearchData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, `Search the rotated array for ${target}.`, snap({}), []);

  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    push(3, `mid = ${mid}, nums[mid] = ${nums[mid]}.`, snap({ mid }), [...outside(), { ref: mid, role: "current" }]);
    if (nums[mid] === target) {
      found = mid;
      push(4, `Found ${target} at index ${mid}.`, snap({ mid, found }), [{ ref: mid, role: "target" }]);
      return steps;
    }
    if (nums[lo] <= nums[mid]) {
      // Left half [lo..mid] is sorted.
      if (nums[lo] <= target && target < nums[mid]) {
        push(7, `Left half [${nums[lo]}..${nums[mid]}] is sorted and holds ${target} — search left.`, snap({ mid }), [...outside(), { ref: lo, role: "active" }, { ref: mid, role: "swapped" }]);
        hi = mid - 1;
      } else {
        push(7, `Left half is sorted but ${target} isn't in it — search right.`, snap({ mid }), [...outside(), { ref: mid, role: "swapped" }]);
        lo = mid + 1;
      }
    } else {
      // Right half [mid..hi] is sorted.
      if (nums[mid] < target && target <= nums[hi]) {
        push(10, `Right half [${nums[mid]}..${nums[hi]}] is sorted and holds ${target} — search right.`, snap({ mid }), [...outside(), { ref: hi, role: "active" }, { ref: mid, role: "swapped" }]);
        lo = mid + 1;
      } else {
        push(10, `Right half is sorted but ${target} isn't in it — search left.`, snap({ mid }), [...outside(), { ref: mid, role: "swapped" }]);
        hi = mid - 1;
      }
    }
  }

  push(13, `${target} is not in the array (return -1).`, snap({ mid: null }), []);
  return steps;
}
