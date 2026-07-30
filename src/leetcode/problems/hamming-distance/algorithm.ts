import type { Step } from "@/core/types";

export interface HammingData {
  x: number;
  y: number;
  bits: number;
  /** bit position currently examined */
  bit: number | null;
  count: number;
  answer: number | null;
}

export type HammingStep = Step<HammingData>;

/**
 * XOR is 1 exactly at the bit positions where x and y differ, so the Hamming distance is the number of
 * set bits in x XOR y. Shifting right and testing the lowest bit counts them. `line` indexes CODE.
 */
export function hammingSteps(x: number, y: number): HammingStep[] {
  const steps: HammingStep[] = [];
  const xor = x ^ y;
  const maxVal = Math.max(x, y, 1);
  let bits = 1;
  while (1 << bits <= maxVal) bits++;

  const snap = (o: Partial<HammingData>): HammingData => ({ x, y, bits, bit: null, count: 0, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<HammingData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `XOR = ${x} ^ ${y} = ${xor} (binary ${xor.toString(2).padStart(bits, "0")}); count its 1 bits.`);

  let count = 0;
  for (let b = 0; b < bits; b++) {
    const diff = (xor >> b) & 1;
    if (diff) count++;
    push(4, `Bit ${b}: ${diff ? "differs → count " + count : "same"}.`, { bit: b, count });
  }

  push(7, `Hamming distance: ${count}.`, { count, answer: count });
  return steps;
}
