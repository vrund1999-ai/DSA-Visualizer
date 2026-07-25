import type { Step } from "@/core/types";

export interface SmallerData {
  nums: number[];
  ans: (number | null)[];
  /** index being answered */
  cur: number | null;
  phase: "count" | "answer" | "done";
  answer: number[] | null;
}

export type SmallerStep = Step<SmallerData>;

/**
 * Bucket-count each value, take prefix sums so count[v-1] is how many values are
 * strictly less than v, then answer each element by that lookup. `line` indexes CODE.
 */
export function smallerSteps(nums: number[]): SmallerStep[] {
  const steps: SmallerStep[] = [];
  const max = Math.max(0, ...nums);
  const count = new Array(max + 1).fill(0);
  for (const n of nums) count[n]++;
  for (let i = 1; i <= max; i++) count[i] += count[i - 1];
  const ans: (number | null)[] = nums.map(() => null);

  const snap = (o: Partial<SmallerData>): SmallerData => ({ nums: [...nums], ans: [...ans], cur: null, phase: "answer", answer: null, ...o });
  const push = (line: number, explanation: string, data: SmallerData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(4, "Counted values, then prefix-summed so count[v−1] = how many are below v.", snap({ phase: "count" }));

  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    ans[i] = v === 0 ? 0 : count[v - 1];
    push(6, `${v}: ${ans[i]} number(s) are smaller.`, snap({ cur: i, phase: "answer" }));
  }

  push(6, `Result: [${ans.join(", ")}].`, snap({ phase: "done", answer: ans as number[] }));
  return steps;
}
