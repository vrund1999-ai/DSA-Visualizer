import type { Highlight, Step } from "@/core/types";

export interface SingleElementData {
  nums: number[];
  lo: number;
  hi: number;
  mid: number | null;
  answer: number | null;
}

export type SingleElementStep = Step<SingleElementData>;

/**
 * Before the single element every pair starts at an even index; after it the
 * pairing shifts by one. Binary-searching on that parity — checking whether the
 * even-aligned mid still pairs with its right neighbour — locates the odd one out
 * in O(log n). `line` indexes CODE.
 */
export function singleElementSteps(nums: number[]): SingleElementStep[] {
  const steps: SingleElementStep[] = [];
  let lo = 0;
  let hi = nums.length - 1;
  let answer: number | null = null;

  const outside = (): Highlight[] => {
    const hl: Highlight[] = [];
    for (let k = 0; k < nums.length; k++) if (k < lo || k > hi) hl.push({ ref: k, role: "visited" });
    return hl;
  };
  const snap = (o: Partial<SingleElementData>): SingleElementData => ({ nums: [...nums], lo, hi, mid: null, answer, ...o });
  const push = (line: number, explanation: string, data: SingleElementData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Binary-search on pair parity to find the unpaired element.", snap({}), []);

  while (lo < hi) {
    let mid = (lo + hi) >> 1;
    if (mid % 2 === 1) mid--;
    if (nums[mid] === nums[mid + 1]) {
      push(5, `nums[${mid}] pairs with nums[${mid + 1}] — the single is to the right.`, snap({ mid }), [...outside(), { ref: mid, role: "current" }, { ref: mid + 1, role: "compared" }]);
      lo = mid + 2;
    } else {
      push(6, `nums[${mid}] ≠ nums[${mid + 1}] — the single is at mid or left.`, snap({ mid }), [...outside(), { ref: mid, role: "current" }, { ref: mid + 1, role: "compared" }]);
      hi = mid;
    }
  }

  answer = nums[lo];
  push(8, `The single element is ${nums[lo]} at index ${lo}.`, snap({ mid: null, answer }), [{ ref: lo, role: "target" }]);
  return steps;
}
