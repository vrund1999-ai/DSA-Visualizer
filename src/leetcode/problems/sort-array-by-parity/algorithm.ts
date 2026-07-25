import type { Step } from "@/core/types";

export interface ParityData {
  nums: number[];
  i: number;
  j: number;
  swapped: [number, number] | null;
  done: boolean;
}

export type ParityStep = Step<ParityData>;

/**
 * Two pointers from both ends: advance i past evens (already correct), retreat j past
 * odds, and when i points at an odd and j at an even, swap them. This partitions evens
 * before odds in place. `line` indexes CODE.
 */
export function paritySteps(input: number[]): ParityStep[] {
  const steps: ParityStep[] = [];
  const nums = [...input];
  let i = 0;
  let j = nums.length - 1;

  const snap = (o: Partial<ParityData>): ParityData => ({ nums: [...nums], i, j, swapped: null, done: false, ...o });
  const push = (line: number, explanation: string, data: ParityData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Two pointers: gather evens on the left, odds on the right.", snap({}));

  while (i < j) {
    if (nums[i] % 2 === 0) {
      push(3, `nums[${i}]=${nums[i]} is even — advance i.`, snap({}));
      i++;
    } else if (nums[j] % 2 === 1) {
      push(4, `nums[${j}]=${nums[j]} is odd — retreat j.`, snap({}));
      j--;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      push(6, `Swap ${nums[j]} (odd) ↔ ${nums[i]} (even).`, snap({ swapped: [i, j] }));
      i++;
      j--;
    }
  }

  push(10, `Partitioned: [${nums.join(", ")}].`, snap({ done: true }));
  return steps;
}
