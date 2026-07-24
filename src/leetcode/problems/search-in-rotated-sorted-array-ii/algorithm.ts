import type { Step } from "@/core/types";

export interface RotatedSearchData {
  nums: number[];
  target: number;
  lo: number;
  hi: number;
  mid: number | null;
  found: boolean | null;
  /** the half currently identified as sorted, for narration */
  sortedSide: "left" | "right" | "ambiguous" | null;
}

export type RotatedSearchStep = Step<RotatedSearchData>;

/**
 * Binary search on a rotated, possibly-duplicated array. Each step one half is
 * sorted; if duplicates make nums[lo] == nums[mid] == nums[hi] we can't tell which,
 * so we trim both ends by one. `line` indexes CODE.
 */
export function rotatedSearchSteps(nums: number[], target: number): RotatedSearchStep[] {
  const steps: RotatedSearchStep[] = [];
  let lo = 0;
  let hi = nums.length - 1;

  const snap = (o: Partial<RotatedSearchData>): RotatedSearchData => ({ nums: [...nums], target, lo, hi, mid: null, found: null, sortedSide: null, ...o });
  const push = (line: number, explanation: string, data: RotatedSearchData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Search for ${target} in a rotated array (duplicates allowed).`, snap({}));

  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] === target) {
      push(4, `nums[${mid}] = ${target} — found!`, snap({ mid, found: true }));
      return steps;
    }
    if (nums[lo] === nums[mid] && nums[mid] === nums[hi]) {
      push(6, `Ends equal (${nums[mid]}) — ambiguous, trim both ends.`, snap({ mid, sortedSide: "ambiguous" }));
      lo++;
      hi--;
    } else if (nums[lo] <= nums[mid]) {
      if (nums[lo] <= target && target < nums[mid]) {
        push(9, `Left half [${lo}, ${mid}) is sorted and holds ${target} — go left.`, snap({ mid, sortedSide: "left" }));
        hi = mid - 1;
      } else {
        push(9, `Left half sorted but ${target} not inside — go right.`, snap({ mid, sortedSide: "left" }));
        lo = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[hi]) {
        push(12, `Right half (${mid}, ${hi}] is sorted and holds ${target} — go right.`, snap({ mid, sortedSide: "right" }));
        lo = mid + 1;
      } else {
        push(12, `Right half sorted but ${target} not inside — go left.`, snap({ mid, sortedSide: "right" }));
        hi = mid - 1;
      }
    }
  }

  push(15, `${target} is not present → false.`, snap({ found: false }));
  return steps;
}
