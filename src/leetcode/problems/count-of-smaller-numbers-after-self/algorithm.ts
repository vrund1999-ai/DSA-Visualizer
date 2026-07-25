import type { Step } from "@/core/types";

export interface CountSmallerData {
  nums: number[];
  res: number[];
  i: number | null;
  j: number | null;
  /** true when nums[j] < nums[i] this step */
  smaller: boolean;
  done: boolean;
}

export type CountSmallerStep = Step<CountSmallerData>;

/**
 * For each index i, count how many later elements are strictly smaller. Shown as the
 * direct O(n²) scan for clarity; large inputs use a merge-sort or Fenwick-tree count.
 * `line` indexes CODE.
 */
export function countSmallerSteps(nums: number[]): CountSmallerStep[] {
  const steps: CountSmallerStep[] = [];
  const res = new Array(nums.length).fill(0);

  const snap = (o: Partial<CountSmallerData>): CountSmallerData => ({ nums: [...nums], res: [...res], i: null, j: null, smaller: false, done: false, ...o });
  const push = (line: number, explanation: string, data: CountSmallerData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "For each element, count strictly smaller elements to its right.", snap({}));

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const smaller = nums[j] < nums[i];
      if (smaller) res[i]++;
      push(4, `nums[${j}]=${nums[j]} ${smaller ? "<" : "≥"} nums[${i}]=${nums[i]}${smaller ? ` → res[${i}]=${res[i]}` : ""}.`, snap({ i, j, smaller }));
    }
  }

  push(7, `Counts: [${res.join(", ")}].`, snap({ done: true }));
  return steps;
}
