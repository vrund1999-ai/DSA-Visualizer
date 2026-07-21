import type { Highlight, Step } from "@/core/types";

export interface BinarySearchInput {
  nums: number[];
  target: number;
}

export interface BinarySearchData {
  nums: number[];
  target: number;
  lo: number;
  hi: number;
  mid: number | null;
  found: number | null;
}

export type BinarySearchStep = Step<BinarySearchData>;

/**
 * Classic binary search on a sorted array. Each step halves the search range by
 * comparing the middle element to the target. `line` indexes CODE.
 */
export function binarySearchSteps(input: BinarySearchInput): BinarySearchStep[] {
  const { nums, target } = input;
  const steps: BinarySearchStep[] = [];
  let lo = 0;
  let hi = nums.length - 1;
  let found: number | null = null;
  let comparisons = 0;

  const outside = (): Highlight[] => {
    const hl: Highlight[] = [];
    for (let k = 0; k < nums.length; k++) {
      if (k < lo || k > hi) hl.push({ ref: k, role: "visited" });
    }
    return hl;
  };
  const snap = (o: Partial<BinarySearchData>): BinarySearchData => ({
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
    data: BinarySearchData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { comparisons } });
  };

  push(1, `Search a sorted array for ${target}, tracking a range [lo, hi].`, snap({}), []);

  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    comparisons++;
    push(3, `mid = (${lo} + ${hi}) / 2 = ${mid}. Compare nums[${mid}] = ${nums[mid]} with ${target}.`, snap({ mid }), [
      ...outside(),
      { ref: mid, role: "current" },
    ]);

    if (nums[mid] === target) {
      found = mid;
      push(4, `nums[${mid}] equals the target — found at index ${mid}.`, snap({ mid, found }), [{ ref: mid, role: "target" }]);
      return steps;
    }
    if (nums[mid] < target) {
      push(5, `${nums[mid]} < ${target} — discard the left half, search right.`, snap({ mid }), [
        ...outside(),
        { ref: mid, role: "swapped" },
      ]);
      lo = mid + 1;
    } else {
      push(6, `${nums[mid]} > ${target} — discard the right half, search left.`, snap({ mid }), [
        ...outside(),
        { ref: mid, role: "swapped" },
      ]);
      hi = mid - 1;
    }
  }

  push(8, `Range is empty — ${target} is not in the array (return -1).`, snap({ mid: null }), []);
  return steps;
}
