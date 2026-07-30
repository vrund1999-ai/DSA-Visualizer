import type { Step } from "@/core/types";

export interface PairRemovalData {
  nums: number[];
  /** index of the pair (i, i+1) chosen to merge */
  pair: number | null;
  ops: number;
  answer: number | null;
}

export type PairRemovalStep = Step<PairRemovalData>;

const isSorted = (a: number[]) => a.every((v, i) => i === 0 || a[i - 1] <= v);

/**
 * Each operation merges an adjacent pair into their sum, shrinking the array. Greedily merging the pair
 * with the smallest sum (leftmost on ties) drives the array toward non-decreasing order with the fewest
 * operations. `line` indexes CODE.
 */
export function pairRemovalSteps(input: number[]): PairRemovalStep[] {
  const steps: PairRemovalStep[] = [];
  const nums = [...input];
  let ops = 0;

  const snap = (o: Partial<PairRemovalData>): PairRemovalData => ({ nums: [...nums], pair: null, ops, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PairRemovalData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Repeatedly merge the adjacent pair with the smallest sum until the array is sorted.");

  while (!isSorted(nums)) {
    let best = 0;
    for (let i = 1; i + 1 <= nums.length - 1; i++) if (nums[i] + nums[i + 1] < nums[best] + nums[best + 1]) best = i;
    push(7, `Smallest-sum pair is (${nums[best]}, ${nums[best + 1]}) at index ${best}.`, { pair: best });
    nums[best] += nums[best + 1];
    nums.splice(best + 1, 1);
    ops++;
    push(10, `Merged into ${nums[best]} → [${nums.join(", ")}] (op ${ops}).`, {});
  }

  push(12, `Sorted after ${ops} operation(s).`, { answer: ops });
  return steps;
}
