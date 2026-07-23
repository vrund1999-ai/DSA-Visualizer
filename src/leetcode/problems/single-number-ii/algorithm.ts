import type { Step } from "@/core/types";

export interface SingleNumberIIData {
  nums: number[];
  i: number | null;
  /** Bit-count tally for the low `width` bits. */
  bits: number[];
  width: number;
  result: number | null;
  phase: "tally" | "build" | "done";
}

export type SingleNumberIIStep = Step<SingleNumberIIData>;

/**
 * Every element appears three times except one. Summing each bit position across
 * all numbers gives a multiple of 3 for the common elements; the leftover bits
 * (count mod 3 ≠ 0) reconstruct the unique number. `line` indexes CODE.
 */
export function singleNumberIISteps(nums: number[]): SingleNumberIIStep[] {
  const steps: SingleNumberIIStep[] = [];
  // Enough bit columns to represent the largest value (min 5 for a tidy display).
  const maxVal = nums.reduce((m, x) => Math.max(m, Math.abs(x)), 0);
  const width = Math.max(5, maxVal.toString(2).length);
  const bits = new Array(width).fill(0);
  let result: number | null = null;

  const snap = (o: Partial<SingleNumberIIData>): SingleNumberIIData => ({
    nums: [...nums],
    i: null,
    bits: [...bits],
    width,
    result,
    phase: "tally",
    ...o,
  });
  const push = (line: number, explanation: string, data: SingleNumberIIData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Tally how many numbers have a 1 in each bit position.", snap({}));

  for (let i = 0; i < nums.length; i++) {
    for (let b = 0; b < width; b++) bits[b] += (nums[i] >> b) & 1;
    push(4, `Add ${nums[i]} (${nums[i].toString(2).padStart(width, "0")}) to the bit tally.`, snap({ i, phase: "tally" }));
  }

  let res = 0;
  push(5, "Any bit whose count isn't a multiple of 3 belongs to the unique number.", snap({ phase: "build" }));
  for (let b = 0; b < width; b++) {
    if (bits[b] % 3) {
      res |= 1 << b;
      push(7, `bit ${b}: count ${bits[b]} mod 3 ≠ 0 — set it. res = ${res}.`, snap({ phase: "build", result: res }));
    }
  }

  result = res;
  push(8, `The single number is ${res}.`, snap({ phase: "done", result: res }));
  return steps;
}
