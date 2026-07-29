import type { Step } from "@/core/types";

export interface MaxXorData {
  nums: number[];
  bits: number;
  /** current bit index under consideration */
  bit: number | null;
  mask: number;
  candidate: number | null;
  max: number;
  /** the two prefixes that realized the candidate, if found */
  pair: [number, number] | null;
  answer: number | null;
}

export type MaxXorStep = Step<MaxXorData>;

/**
 * Build the answer from the most significant bit down: greedily assume the next bit can be 1, then
 * check whether two prefixes (numbers masked to the bits seen so far) XOR to that target — if a ^ b =
 * candidate then a ^ candidate = b, so a hash set makes the test O(1). `line` indexes CODE.
 */
export function maxXorSteps(nums: number[]): MaxXorStep[] {
  const steps: MaxXorStep[] = [];
  const maxVal = Math.max(...nums, 1);
  let bits = 0;
  while (1 << (bits + 1) <= maxVal) bits++;

  let max = 0;
  let mask = 0;

  const snap = (o: Partial<MaxXorData>): MaxXorData => ({ nums, bits, bit: null, mask, candidate: null, max, pair: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MaxXorData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Greedily build the maximum XOR one bit at a time, from the high bit down.");

  for (let bit = bits; bit >= 0; bit--) {
    mask |= 1 << bit;
    const prefixes = new Set(nums.map((n) => n & mask));
    const candidate = max | (1 << bit);
    let found: [number, number] | null = null;
    for (const p of prefixes) {
      if (prefixes.has(candidate ^ p)) {
        found = [candidate ^ p, p];
        break;
      }
    }
    if (found) {
      max = candidate;
      push(9, `Bit ${bit}: candidate ${candidate} achievable (${found[0]} ^ ${found[1]}) — keep it.`, { bit, candidate, max, pair: found });
    } else {
      push(7, `Bit ${bit}: candidate ${candidate} not achievable — leave this bit 0.`, { bit, candidate });
    }
  }

  push(13, `Maximum XOR: ${max}.`, { answer: max });
  return steps;
}
