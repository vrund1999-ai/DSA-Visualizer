import type { Step } from "@/core/types";

export interface BuildArrayData {
  nums: number[];
  ans: (number | null)[];
  /** index i being computed */
  i: number | null;
  /** the intermediate index nums[i] */
  mid: number | null;
  done: boolean;
}

export type BuildArrayStep = Step<BuildArrayData>;

/**
 * Each output is a double lookup: ans[i] = nums[nums[i]]. Follow index i to nums[i],
 * then read the value there. `line` indexes CODE.
 */
export function buildArraySteps(nums: number[]): BuildArrayStep[] {
  const steps: BuildArrayStep[] = [];
  const ans: (number | null)[] = nums.map(() => null);

  const snap = (o: Partial<BuildArrayData>): BuildArrayData => ({ nums: [...nums], ans: [...ans], i: null, mid: null, done: false, ...o });
  const push = (line: number, explanation: string, data: BuildArrayData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "ans[i] = nums[nums[i]] — follow the index twice.", snap({}));

  for (let i = 0; i < nums.length; i++) {
    const mid = nums[i];
    ans[i] = nums[mid];
    push(3, `i=${i}: nums[${i}]=${mid}, nums[${mid}]=${nums[mid]} → ans[${i}]=${nums[mid]}.`, snap({ i, mid }));
  }

  push(5, `Result: [${ans.join(", ")}].`, snap({ done: true }));
  return steps;
}
