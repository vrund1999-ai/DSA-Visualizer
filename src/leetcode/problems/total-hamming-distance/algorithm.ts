import type { Step } from "@/core/types";

export interface HammingData {
  nums: number[];
  bits: number;
  /** current bit column */
  bit: number | null;
  ones: number | null;
  total: number;
  answer: number | null;
}

export type HammingStep = Step<HammingData>;

/**
 * Instead of comparing all pairs, look at each bit position independently: if `ones` numbers have a 1
 * there, every such number differs from each of the (n − ones) numbers with a 0, contributing
 * ones·(n − ones) to the total. Summing over bit columns gives the answer. `line` indexes CODE.
 */
export function hammingSteps(nums: number[]): HammingStep[] {
  const steps: HammingStep[] = [];
  const n = nums.length;
  const maxVal = Math.max(...nums, 1);
  let bits = 1;
  while (1 << bits <= maxVal) bits++;
  let total = 0;

  const snap = (o: Partial<HammingData>): HammingData => ({ nums, bits, bit: null, ones: null, total, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<HammingData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "For each bit column, ones × zeros pairs differ there.");

  for (let bit = 0; bit < bits; bit++) {
    let ones = 0;
    for (const x of nums) ones += (x >> bit) & 1;
    total += ones * (n - ones);
    push(8, `Bit ${bit}: ${ones} one(s) × ${n - ones} zero(s) = ${ones * (n - ones)} (total ${total}).`, { bit, ones });
  }

  push(10, `Total Hamming distance: ${total}.`, { answer: total });
  return steps;
}
