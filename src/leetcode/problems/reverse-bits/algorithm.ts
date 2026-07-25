import type { Step } from "@/core/types";

export interface ReverseBitsData {
  inputBits: number[];
  resultBits: number[];
  /** source bit index being read */
  i: number | null;
  bit: number | null;
  answer: number | null;
}

export type ReverseBitsStep = Step<ReverseBitsData>;

const toBits = (n: number) => Array.from({ length: 32 }, (_, k) => (n >>> (31 - k)) & 1);

/**
 * Reversing a 32-bit word mirrors bit i to position 31−i. We read each source bit from the low end
 * and OR it into the mirrored slot of the result, so after 32 steps the order is fully flipped.
 * `line` indexes CODE.
 */
export function reverseBitsSteps(n: number): ReverseBitsStep[] {
  const steps: ReverseBitsStep[] = [];
  const inputBits = toBits(n);
  let result = 0;

  const snap = (o: Partial<ReverseBitsData>): ReverseBitsData => ({ inputBits, resultBits: toBits(result >>> 0), i: null, bit: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ReverseBitsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Mirror each bit i to position 31 − i to reverse the 32-bit word.");

  for (let i = 0; i < 32; i++) {
    const bit = (n >>> i) & 1;
    if (bit) result |= bit << (31 - i);
    push(4, `Bit ${i} (value ${bit}) → mirror to position ${31 - i}.`, { i, bit });
  }

  const answer = result >>> 0;
  push(6, `Reversed value: ${answer}.`, { answer });
  return steps;
}
