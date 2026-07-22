import type { Highlight, Step } from "@/core/types";

export interface SquaresData {
  nums: number[];
  res: (number | string)[];
  l: number;
  r: number;
  k: number | null;
}

export type SquaresStep = Step<SquaresData>;

/**
 * The largest square comes from whichever end has the bigger absolute value, so
 * two pointers close in from both ends and fill the result from the back. `line`
 * indexes CODE.
 */
export function squaresSteps(nums: number[]): SquaresStep[] {
  const steps: SquaresStep[] = [];
  const res: (number | string)[] = new Array(nums.length).fill("·");
  let l = 0;
  let r = nums.length - 1;

  const snap = (o: Partial<SquaresData>): SquaresData => ({ nums: [...nums], res: [...res], l, r, k: null, ...o });
  const push = (line: number, explanation: string, data: SquaresData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(2, "Two pointers at the ends; the bigger absolute value squares largest.", snap({ k: nums.length - 1 }), [
    { ref: l, role: "current" },
    { ref: r, role: "active" },
  ]);

  for (let k = nums.length - 1; k >= 0; k--) {
    if (Math.abs(nums[l]) > Math.abs(nums[r])) {
      res[k] = nums[l] * nums[l];
      push(5, `|${nums[l]}| > |${nums[r]}| — place ${nums[l]}² = ${res[k]} at index ${k}.`, snap({ k }), [{ ref: l, role: "swapped" }]);
      l++;
    } else {
      res[k] = nums[r] * nums[r];
      push(7, `|${nums[r]}| ≥ |${nums[l]}| — place ${nums[r]}² = ${res[k]} at index ${k}.`, snap({ k }), [{ ref: r, role: "swapped" }]);
      r--;
    }
  }

  push(9, "Result is sorted ascending.", snap({ k: null }), []);
  return steps;
}
