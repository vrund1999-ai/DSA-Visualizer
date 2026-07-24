import type { Step } from "@/core/types";

export interface ContiguousData {
  nums: number[];
  pos: number | null;
  sum: number;
  best: number;
  /** [start, end] of the best equal-balance subarray */
  bestRange: [number, number] | null;
  /** first-occurrence map as entries */
  first: [number, number][];
  answer: number | null;
}

export type ContiguousStep = Step<ContiguousData>;

/**
 * Treat 0 as −1 and track a running sum. Whenever the same running sum reappears, the
 * stretch between the two positions has as many 1s as 0s. Remembering each sum's first
 * index gives the longest such subarray. `line` indexes CODE.
 */
export function contiguousSteps(nums: number[]): ContiguousStep[] {
  const steps: ContiguousStep[] = [];
  const first = new Map<number, number>([[0, -1]]);
  let sum = 0;
  let best = 0;
  let bestRange: [number, number] | null = null;

  const snap = (pos: number, o: Partial<ContiguousData>): ContiguousData => ({ nums: [...nums], pos, sum, best, bestRange, first: [...first.entries()], answer: null, ...o });
  const push = (line: number, pos: number, explanation: string, o: Partial<ContiguousData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(2, -1, "Map 0→−1; a repeated running sum means a balanced subarray.");

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 1 ? 1 : -1;
    if (first.has(sum)) {
      const len = i - first.get(sum)!;
      if (len > best) {
        best = len;
        bestRange = [first.get(sum)! + 1, i];
      }
      push(6, i, `Sum ${sum} seen before at ${first.get(sum)} — balanced length ${len}.`, { bestRange });
    } else {
      first.set(sum, i);
      push(7, i, `Sum ${sum} new — remember index ${i}.`);
    }
  }

  push(9, -1, `Longest balanced subarray: ${best}.`, { answer: best });
  return steps;
}
