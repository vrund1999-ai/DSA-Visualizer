import type { Step } from "@/core/types";

export interface MaxFreqData {
  nums: number[];
  scan: number | null;
  /** distinct values with their running counts, in first-seen order */
  freq: { value: number; count: number }[];
  maxFreq: number | null;
  total: number | null;
}

export type MaxFreqStep = Step<MaxFreqData>;

/**
 * Count how many elements have the maximum frequency: tally each value, find the largest count, then sum
 * the counts of every value that hits it (total elements, not distinct values). `line` indexes CODE.
 */
export function maxFreqSteps(nums: number[]): MaxFreqStep[] {
  const steps: MaxFreqStep[] = [];
  const freq = new Map<number, number>();

  const freqArr = () => [...freq.entries()].map(([value, count]) => ({ value, count }));
  const snap = (o: Partial<MaxFreqData>): MaxFreqData => ({
    nums,
    scan: null,
    freq: freqArr(),
    maxFreq: null,
    total: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<MaxFreqData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Tally the frequency of each value.`);

  for (let i = 0; i < nums.length; i++) {
    freq.set(nums[i], (freq.get(nums[i]) ?? 0) + 1);
    push(3, `nums[${i}] = ${nums[i]} → count ${freq.get(nums[i])}.`, { scan: i });
  }

  const maxFreq = Math.max(...freq.values());
  push(4, `Highest frequency is ${maxFreq}.`, { maxFreq });

  let total = 0;
  for (const c of freq.values()) if (c === maxFreq) total += c;
  push(8, `Sum the counts of all values with frequency ${maxFreq} → ${total}.`, { maxFreq, total });
  return steps;
}
