import type { Highlight, Step } from "@/core/types";

export interface SearchRangeInput {
  nums: number[];
  target: number;
}

export interface SearchRangeData {
  nums: number[];
  target: number;
  lo: number;
  hi: number;
  mid: number | null;
  phase: "first" | "last" | "done";
  first: number;
  last: number;
}

export type SearchRangeStep = Step<SearchRangeData>;

/**
 * Two binary searches: one biased left to find the first occurrence, one biased
 * right for the last. On an equal hit, keep searching the side that could hold an
 * earlier/later match. `line` indexes CODE.
 */
export function searchRangeSteps(input: SearchRangeInput): SearchRangeStep[] {
  const { nums, target } = input;
  const steps: SearchRangeStep[] = [];
  let first = -1;
  let last = -1;

  const bound = (isFirst: boolean, phase: "first" | "last") => {
    let lo = 0;
    let hi = nums.length - 1;
    let res = -1;
    const push = (line: number, explanation: string, mid: number | null, extra: Highlight[]) => {
      const outside: Highlight[] = [];
      for (let k = 0; k < nums.length; k++) if (k < lo || k > hi) outside.push({ ref: k, role: "visited" });
      steps.push({
        id: steps.length,
        line,
        explanation,
        data: { nums: [...nums], target, lo, hi, mid, phase, first, last },
        highlights: [...outside, ...extra],
      });
    };

    push(2, `Binary-search for the ${isFirst ? "first" : "last"} occurrence of ${target}.`, null, []);
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (nums[mid] === target) {
        res = mid;
        push(6, `nums[${mid}] = ${target} — record ${mid}, keep searching ${isFirst ? "left" : "right"}.`, mid, [{ ref: mid, role: "target" }]);
        if (isFirst) hi = mid - 1;
        else lo = mid + 1;
      } else if (nums[mid] < target) {
        push(8, `nums[${mid}] = ${nums[mid]} < ${target} — go right.`, mid, [{ ref: mid, role: "swapped" }]);
        lo = mid + 1;
      } else {
        push(9, `nums[${mid}] = ${nums[mid]} > ${target} — go left.`, mid, [{ ref: mid, role: "swapped" }]);
        hi = mid - 1;
      }
    }
    return res;
  };

  first = bound(true, "first");
  last = bound(false, "last");
  steps.push({
    id: steps.length,
    line: 13,
    explanation: first === -1 ? `${target} not found — [-1, -1].` : `${target} spans indices [${first}, ${last}].`,
    data: { nums: [...nums], target, lo: 0, hi: nums.length - 1, mid: null, phase: "done", first, last },
    highlights: first === -1 ? [] : Array.from({ length: last - first + 1 }, (_, k) => ({ ref: first + k, role: "target" as const })),
  });
  return steps;
}
