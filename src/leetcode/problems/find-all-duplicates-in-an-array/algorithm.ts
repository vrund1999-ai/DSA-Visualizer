import type { Step } from "@/core/types";

export interface FindDupData {
  nums: number[];
  /** index being read in the outer loop */
  readIdx: number | null;
  /** index i = |n|-1 being used as a marker slot */
  markIdx: number | null;
  duplicate: number | null;
  result: number[];
  answer: number[] | null;
}

export type FindDupStep = Step<FindDupData>;

/**
 * Values are in 1..n, so value v maps to slot v-1. The first time we reach a slot we flip
 * its sign to remember "seen"; if it's already negative the value is a duplicate. O(1) space.
 * `line` indexes CODE.
 */
export function findDuplicatesSteps(input: number[]): FindDupStep[] {
  const steps: FindDupStep[] = [];
  const nums = [...input];
  const result: number[] = [];

  const snap = (o: Partial<FindDupData>): FindDupData => ({ nums: [...nums], readIdx: null, markIdx: null, duplicate: null, result: [...result], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<FindDupData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Use each value's sign as a 'seen' marker (values are 1..n).");

  for (let r = 0; r < nums.length; r++) {
    const n = nums[r];
    const i = Math.abs(n) - 1;
    push(3, `Read ${n}; it maps to slot ${i}.`, { readIdx: r, markIdx: i });
    if (nums[i] < 0) {
      result.push(i + 1);
      push(5, `Slot ${i} already negative → ${i + 1} is a duplicate.`, { readIdx: r, markIdx: i, duplicate: i + 1 });
    } else {
      nums[i] = -nums[i];
      push(7, `Mark slot ${i} negative → value ${i + 1} now seen.`, { readIdx: r, markIdx: i });
    }
  }

  push(9, `Duplicates: [${result.join(", ")}].`, { answer: [...result] });
  return steps;
}
