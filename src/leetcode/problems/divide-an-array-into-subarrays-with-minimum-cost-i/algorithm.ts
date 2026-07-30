import type { Step } from "@/core/types";

export interface DivideCostData {
  nums: number[];
  /** index currently examined */
  scan: number | null;
  /** indices of the two smallest found in nums[1..] */
  chosen: number[];
  cost: number | null;
}

export type DivideCostStep = Step<DivideCostData>;

/**
 * Split nums into 3 contiguous subarrays; the cost is the sum of each subarray's first element. Subarray 1
 * always starts at index 0, so its cost is fixed; the other two starts are any indices in nums[1..], so we
 * pick the two smallest of those. Answer = nums[0] + two smallest. `line` indexes CODE.
 */
export function divideCostSteps(nums: number[]): DivideCostStep[] {
  const steps: DivideCostStep[] = [];
  let i1 = -1;
  let i2 = -1;
  let m1 = Infinity;
  let m2 = Infinity;

  const snap = (o: Partial<DivideCostData>): DivideCostData => ({
    nums,
    scan: null,
    chosen: [i1, i2].filter((x) => x >= 0),
    cost: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<DivideCostData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Subarray 1 always starts at index 0, so its cost is fixed at ${nums[0]}.`);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < m1) {
      m2 = m1;
      i2 = i1;
      m1 = nums[i];
      i1 = i;
      push(4, `nums[${i}] = ${nums[i]} is the new smallest; previous smallest becomes 2nd.`, { scan: i });
    } else if (nums[i] < m2) {
      m2 = nums[i];
      i2 = i;
      push(5, `nums[${i}] = ${nums[i]} is the new 2nd smallest.`, { scan: i });
    } else {
      push(3, `nums[${i}] = ${nums[i]} isn't among the two smallest; skip.`, { scan: i });
    }
  }

  const cost = nums[0] + m1 + m2;
  push(7, `Cost = ${nums[0]} + ${m1} + ${m2} = ${cost}.`, { cost });
  return steps;
}
